import React from 'react';
import { Tabs } from 'antd';
import "./adminDashboard.css"
import { AdminDashBoardFormList } from "../adminDashBoardFormList/adminDashBoardFormList.js"
import {AdminContent} from "../adminContent/adminContent"
// import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

export const AdminDashBoard = () => {
    return (
        <Tabs defaultActiveKey="1" className="adminTabs">
            <TabPane tab="Applications" key="1">
                <AdminDashBoardFormList />
            </TabPane>
            <TabPane tab="Content" key="2">
                <AdminContent />
            </TabPane>
        </Tabs>
    )
}

