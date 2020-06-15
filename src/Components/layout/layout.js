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
            <Route path="/CHILDREN AAHUNG FOUNDATION" exact >
                <NGOPage name="CHILDREN AAHUNG FOUNDATION"/>
            </Route>
            <Route path="/AZAD FOUNDATION" exact >
                <NGOPage name="AZAD FOUNDATION"/>
            </Route>
            <Route path="/DAR-UL-SUKUN" exact >
                <NGOPage name="DAR-UL-SUKUN"/>
            </Route>
            <Route path="/EDHI FOUNDATION" exact >
                <NGOPage name="EDHI FOUNDATION"/>
            </Route>
            <Route path="/KONPAL CHILD ABUSE PREVENTION SOCIETY" exact >
                <NGOPage name="KONPAL CHILD ABUSE PREVENTION SOCIETY"/>
            </Route>
            <Route path="/MAKE A WISH" exact >
                <NGOPage name="MAKE A WISH"/>
            </Route>
            <Route path="/SOS VILLAGE" exact >
                <NGOPage name="SOS VILLAGE"/>
            </Route>
            <Route path="/COMMUNITY AMAN FOUNDATION" exact >
                <NGOPage name="COMMUNITY AMAN FOUNDATION"/>
            </Route>
            <Route path="/CHHIPA FOUNDATION" exact >
                <NGOPage name="CHHIPA FOUNDATION"/>
            </Route>
            <Route path="/FIX IT" exact >
                <NGOPage name="FIX IT"/>
            </Route>
            <Route path="/JAFARIA DISASTER MANAGEMENT CELL (JDC)" exact >
                <NGOPage name="JAFARIA DISASTER MANAGEMENT CELL (JDC)"/>
            </Route>
            <Route path="/LYARIANZ YOUTH DEVELOPMENT PROGRAM" exact >
                <NGOPage name="LYARIANZ YOUTH DEVELOPMENT PROGRAM"/>
            </Route>
            <Route path="/ROBIN HOOD ARMY" exact >
                <NGOPage name="ROBIN HOOD ARMY"/>
            </Route>
        </Switch>
        <MyFooter theme={props.themeColor} />
    </Layout>
)
