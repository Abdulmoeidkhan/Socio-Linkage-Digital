import React,{useEffect,useState} from 'react';
import { Tabs, Breadcrumb, Layout, Descriptions,Empty } from 'antd';
import { ApplicationForm } from "./applicationsForm/applicationsForm"
import firebase from "../../Config/firebaseConfig"
import 'antd/dist/antd.css';
import "./application.css"
import {
    Link
} from "react-router-dom";


const { Content } = Layout;
const { TabPane } = Tabs;

export const Application = () => {
    const [formData,setFormData]=useState({})
    const [formSubmitted,setFormSubmitted]=useState(false)
    useEffect(()=>{
        if(Object.entries(formData).length===0){
            firebase.getFormData()
            .then((val)=>{
                if(val!=null && val.form){
                    setFormData(val)
                }
            })
        }
    })


    return (
        <Content className="pageContentClass">
            <div style={{ margin: '0px 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>
                        <Link to="/">
                            Home
                    </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/ApplicationForm">
                            Applications
                    </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div >
                    <Tabs>
                        <TabPane tab="Application Form" key="1">
                            {Object.keys(formData).length !=0?<h3>Your Form is submitted</h3>:<ApplicationForm setFormSubmitted={setFormSubmitted}/>}
                        </TabPane>
                        <TabPane tab="My Application" key="2">
                        {Object.keys(formData).length !=0?
                            <Descriptions title={"Application"} bordered className="applicationForms">
                                <Descriptions.Item label="Name" span={1}>{formData.name}</Descriptions.Item>
                                <Descriptions.Item label="Email" span={1}>{formData.form.Email}</Descriptions.Item>
                                <Descriptions.Item label="Contact Number" span={1}>{formData.form.ContactNumber}</Descriptions.Item>
                                <Descriptions.Item label="CNIC" span={1}>{formData.form.CNIC}</Descriptions.Item>
                                <Descriptions.Item label="Gender" span={1}>{formData.form.Gender}</Descriptions.Item>
                                <Descriptions.Item label="Date Of Birth" span={1}>{formData.form.DateOfBirth}</Descriptions.Item>
                                <Descriptions.Item label="Address" span={1}>{formData.form.Address}</Descriptions.Item>
                                <Descriptions.Item label="Remarks" span={1}>{formData.form.Remarks}</Descriptions.Item>
                            </Descriptions>:
                            <Empty/>}
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </Content>
    )
}