import React, { useEffect, useState } from 'react';
import { Card, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import "./card.css"
import firebase from "../../Config/firebaseConfig"
// import Chart from "react-google-charts";
import moment from "moment"


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;


const Cards = () => {

    const [dataForDate, setDataForDate] = useState(today)
    const [dataForData, setDataForData] = useState({})
    // let rowData={}
    let dataToBeRender;
    useEffect(() => {
        if (Object.keys(dataForData).length === 0) {
            async function myCall() {
                await firebase.getDateData().then(val => {
                    setDataForData(val)   
                })
            }
            myCall()
        }
        if (dataToBeRender) {
            dataToBeRender = dataForData[dataForDate]
        }
        else {
            dataToBeRender = dataForData.today
            // console.log(dataToBeRender)
        }
        // console.log(dataToBeRender, dataForData, dataForDate)
    })


    const dateChanged = (a, b) => {
        setDataForDate(b)
    }
    return (
        <div className="site-card-wrapper">
            <div className="specialaboutDiv">
                <Card title="Articles" bordered={true}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem placeat animi sit minima pariatur velit. Nam, repudiandae fuga labore dolor placeat eius perspiciatis inventore explicabo aperiam aspernatur corporis error.
                        </Card>

                <Card title="Organizational News" bordered={true}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem placeat animi sit minima pariatur velit. Nam, repudiandae fuga labore dolor placeat eius perspiciatis inventore explicabo aperiam aspernatur corporis error.
                    </Card>

                <Card title="Event" bordered={true}>

                    <div style={{ minWidth: "300px" }}>
                        <DatePicker bordered={false} showToday={true} defaultValue={moment()} className="widthClass" onChange={(a, b) => { dateChanged(a, b) }} />
                        <div>{dataForDate}</div>
                        {/* <div>{dataForData}</div> */}
                        {/* <Chart
                            chartType="LineChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                [
                                    { type: 'number', label: 'x' },
                                    { type: 'number', label: 'values' },
                                    { id: 'i0', type: 'number', role: 'interval' },
                                    { id: 'i1', type: 'number', role: 'interval' },
                                    { id: 'i2', type: 'number', role: 'interval' },
                                    { id: 'i2', type: 'number', role: 'interval' },
                                    { id: 'i2', type: 'number', role: 'interval' },
                                    { id: 'i2', type: 'number', role: 'interval' },
                                ],
                                [1, 100, 90, 110, 85, 96, 104, 120],
                                [2, 120, 95, 130, 90, 113, 124, 140],
                                [3, 130, 105, 140, 100, 117, 133, 139],
                                [4, 90, 85, 95, 85, 88, 92, 95],
                                [5, 70, 74, 63, 67, 69, 70, 72],
                                [6, 30, 39, 22, 21, 28, 34, 40],
                                [7, 80, 77, 83, 70, 77, 85, 90],
                                [8, 100, 90, 110, 85, 95, 102, 110],
                            ]}
                            options={{
                                intervals: { style: 'sticks' },
                                legend: 'none',
                                chartArea:{minWidth:"247px"}
                            }}
                        />*/}
                    </div>
                </Card>
            </div>
        </div>
    )
}


export default Cards