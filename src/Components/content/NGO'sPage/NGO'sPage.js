import React from 'react';
import { Breadcrumb, Layout, Descriptions, Badge } from 'antd';
import 'antd/dist/antd.css';
import "./NGO'sPage.css"
import {detailedData} from "../../contentRawData/contentRawData"
import {
    Link
} from "react-router-dom";



const { Content } = Layout

export const NGOPage = (props) => {
    let ngoName = props.name
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
                    <Descriptions.Item label="Organisation" span={3}>{detailedData[ngoName].Organization}</Descriptions.Item>
                    <Descriptions.Item label="Operating Area" span={3}>{detailedData[ngoName].OperatingArea}</Descriptions.Item>
                    <Descriptions.Item label="History" span={3}>{detailedData[ngoName].History}</Descriptions.Item>
                    <Descriptions.Item label="CoreFunctions" span={3}>{detailedData[ngoName].CoreFunctions}</Descriptions.Item>
                    <Descriptions.Item label="Credibility" span={3}>{detailedData[ngoName].Credibility}</Descriptions.Item>
                    <Descriptions.Item label="Programs" span={3}>{detailedData[ngoName].Programs}</Descriptions.Item>
                    <Descriptions.Item label="Sustainability" span={3}>{detailedData[ngoName].Sustainability}</Descriptions.Item>
                    <Descriptions.Item label="CostOfServices" span={3}>{detailedData[ngoName].CostofServices}</Descriptions.Item>
                    <Descriptions.Item label="Analysis" span={3}>{detailedData[ngoName].Analysis}</Descriptions.Item>
                    <Descriptions.Item label="Referencelink / Website" span={3}><a className="underlineClass" href={detailedData[ngoName].ReferencelinkWebsite}>{detailedData[ngoName].ReferencelinkWebsite}</a></Descriptions.Item>
                </Descriptions>
            </div>
        </Content>)
}