import React, { useEffect, useState } from 'react';
import { Card, DatePicker, Skeleton } from 'antd';
import 'antd/dist/antd.css';
import "./card.css"
import firebase from "../../Config/firebaseConfig"
// import Chart from "react-google-charts";
import moment from "moment"
import { calenderData } from "../../contentRawData/contentRawData"


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;


const Cards = () => {
    const [dataForDate, setDataForDate] = useState(today)
    const [imgLink, setimgLink] = useState()
    const [content, setContent] = useState()

    let j = false

    const dateChanged = (a, b) => {
        setDataForDate(b)
        let c = b.slice(5, 10)
        setimgLink(undefined)
        for (let i = 0; calenderData.length > i; i++) {
            if (calenderData[i].Date == c) {
                setimgLink(calenderData[i].Image)
            }
        }
    }

    useEffect(() => {
        if (!j) {
            j = true
            let c = today.slice(5, 10)
            for (let i = 0; calenderData.length > i; i++) {
                if (calenderData[i].Date == c) {
                    setimgLink(calenderData[i].Image)
                }
            }
        }
    })

    useEffect(() => {
        firebase.getContent().then(val => {
            setContent(val)
        })
    }, [])

    return (
        <div className="site-card-wrapper">
            {content ?
                <div className="specialaboutDiv">
                    <Card title="Articles" bordered={true}>
                        {content.article}
                    </Card>
                    <Card title="Organizational News" bordered={true}>
                        {content.news}
                    </Card>
                    <Card title="Events" bordered={true}>
                    <DatePicker size="large" bordered={false} showToday={true} defaultValue={moment()} className="widthClass" onChange={(a, b) => { dateChanged(a, b) }} />
                        <div style={{ minWidth: "300px" }}>
                            {imgLink ? <img className="cardImgClass" src={imgLink} /> : <img className="cardImgClass" src={"https://res.cloudinary.com/tanzeelah/image/upload/v1595017293/ezgif.com-video-to-gif_hbdqah.gif"}/>}
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
                :
                <Skeleton active />
            }
        </div>
    )
}


export default Cards