import React from 'react';
import { Breadcrumb, Layout, Descriptions, Badge } from 'antd';
import 'antd/dist/antd.css';
import "./NGO'sPage.css"
import {
    Link
} from "react-router-dom";


let data = {
    "DEWA": {
        "Organization": "Ra’ana Liaquat Craftsmen Colony (RLCC)",
        "OperatingArea": "Shah Faisal Colony, Karachi, Pakistan",
        "History": "A  profound organization started by Begum Ra’ana Liaquat to reconcile the people of Pakistan just after partition, and the organization is successfully operational since 1954.",
        "CoreFunctions": "Quality Education for underprivileged, Vocational training for better livelihood, medical services for a healthy lifestyle.",
        "Credibility": "Registered from Social Welfare Department",
        "Programs": "Adult Literacy, Outreach Community projects, Medical camps, Awareness sessions, Internship and Volunteer services.",
        "Sustainability": "60% self-sufficient and charitable organization",
        "CostofServices": "Minimal and negotiable cost for programs",
        "Analysis": "Throughout RLCC is serving tremendously to refrain the society from the obstacles such as poverty, illiteracy, unemployment, mental health and other health issues. However, their operating area is only Shah Faisal Colony which restricts other persons who are in need but fail to encounter the organization’s services due to the remote location.",
        "ReferencelinkWebsite": "http://rlcc.com.pk/"
    }
}

const { Content } = Layout

export const NGOPage = (props) => {
    let ngoName=props.name
    return (
        <Content className="pageContentClass">
            <div className="marginClass">
                <Breadcrumb style={{ margin: '16px 0px' }}>
                    <Breadcrumb.Item>
                        <Link to="/">
                            Home
                </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/${ngoName}`}>
                            {ngoName}
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Descriptions title={ngoName} bordered>
                    <Descriptions.Item label="Organisation" span={3}>{data[ngoName].Organization}</Descriptions.Item>
                    <Descriptions.Item label="Operating Area" span={3}>{data[ngoName].OperatingArea}</Descriptions.Item>
                    <Descriptions.Item label="History" span={3}>{data[ngoName].History}</Descriptions.Item>
                    <Descriptions.Item label="Core Functions" span={3}>{data[ngoName].CoreFunctions}</Descriptions.Item>
                    <Descriptions.Item label="Credibility" span={3}>{data[ngoName].Credibility}</Descriptions.Item>
                    <Descriptions.Item label="Programs" span={3}>{data[ngoName].Programs}</Descriptions.Item>
                    <Descriptions.Item label="Sustainability" span={3}>{data[ngoName].Sustainability}</Descriptions.Item>
                    <Descriptions.Item label="Cost Of Services" span={3}>{data[ngoName].CostofServices}</Descriptions.Item>
                    <Descriptions.Item label="Analysis" span={3}>{data[ngoName].Analysis}</Descriptions.Item>
                    <Descriptions.Item label="Referencelink / Website" span={3}><a href={data[ngoName].ReferencelinkWebsite}>{data[ngoName].ReferencelinkWebsite}</a></Descriptions.Item>
                </Descriptions>
            </div>
        </Content>)
}