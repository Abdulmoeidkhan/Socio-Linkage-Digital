import React from 'react';
import './layout.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {
    Switch,
    Route
} from "react-router-dom";
import MyFooter from '../footer/footer';
import { HomeContent } from '../content/home/home';
import { MyHeader } from "../header/header.js"
import { AboutUs } from '../content/about/about.js';
import {NGOPage} from "../content/NGO'sPage/NGO'sPage.js"

// const { Header } = Layout;

export const MyLayout = (props) => (
    <Layout className={`site-layout ${props.themeColor}`}>
        <MyHeader themeColor={props.themeColor} themeChanger={props.themeChanger} history={props.history} showDrawer={props.showDrawer}/>
        <Switch>
            <Route path="/" exact component={HomeContent}/>
            <Route path="/aboutUs" exact component={AboutUs}/>
            <Route path="/DEWA" exact >
                <NGOPage name="DEWA"/>
            </Route>
        </Switch>
        <MyFooter theme={props.themeColor} />
    </Layout>
)
