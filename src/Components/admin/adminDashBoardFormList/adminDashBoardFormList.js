import React, { useState, useEffect } from 'react';
import { Card, Descriptions, Skeleton, Empty,Button } from 'antd';
import { Collapse } from 'react-collapse';
import "./adminDashBoardFormList.css"
import firebase from "../../Config/firebaseConfig"
// import { useHistory } from "react-router-dom";

const Data = (props) => {
    const [isChanged, setIsChenged] = useState(false)
    // let editClick = args=>{
    //     console.log(args)
    // }
    return (
        <div className="adminSubDashCardClass">
            <Card
                // title={`Name : ${props.item.value.name}`}
                onClick={() => {
                    setIsChenged(!isChanged)
                }}
                key={props.i}
            >
                {`Name:${props.item.value.name}`}
                <br />
                <br />
                {`Email:${props.item.value.email}`}
            </Card>
            <Collapse isOpened={isChanged} key={props.i + 1}>
                {props.item.value.form ?
                <>
                    <Descriptions bordered className="adminDashApplicationForm" key={props.i}>
                        <Descriptions.Item label="Name" span={3} key={props.i + 2}>{props.item.value.name}</Descriptions.Item>
                        <Descriptions.Item label="Email" span={3} key={props.i + 3}>{props.item.value.email}</Descriptions.Item>
                        <Descriptions.Item label="Contact Number" span={3} key={props.i + 4}>{props.item.value.form.ContactNumber}</Descriptions.Item>
                        <Descriptions.Item label="CNIC" span={3} key={props.i + 5}>{props.item.value.form.CNIC}</Descriptions.Item>
                        <Descriptions.Item label="Gender" span={3} key={props.i + 6}>{props.item.value.form.Gender}</Descriptions.Item>
                        <Descriptions.Item label="Date Of Birth" span={3} key={props.i + 7}>{props.item.value.form.DateOfBirth}</Descriptions.Item>
                        <Descriptions.Item label="Address" span={3} key={props.i + 8}>{props.item.value.form.Address}</Descriptions.Item>
                        <Descriptions.Item label="Remarks" span={3} key={props.i + 9}>{props.item.value.form.Remarks}</Descriptions.Item>
                    </Descriptions> 
                    <br/>
                    {/* <Button type="primary" block onClick={()=>editClick(props.item.name)}>Edit</Button> */}
                    </>:
                    <Empty key={props.i + 10} />}
            </Collapse>
        </div>
    )

}

export const AdminDashBoardFormList = () => {
    const [allData, setAllData] = useState("")
    useEffect(() => {
        firebase.getAllData()
            .then((val) => {
                setAllData(val)
            })
    }, [])
    return (
        <div className="adminDashCardClass" key="1">
            {allData ? allData.map((item, i) => {
                return (
                    <Data item={item} i={i} key={`k${i}`} />
                )
            }) :
                <>
                    <Skeleton active key="a1" />
                    <Skeleton active key="a2" />
                    <Skeleton active key="a3" />
                    <Skeleton active key="a4" />
                </>
            }
        </div>
    )
}

