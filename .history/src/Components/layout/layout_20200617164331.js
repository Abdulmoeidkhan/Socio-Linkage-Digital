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
            <Route path="/RLCC" exact >
                <NGOPage name="RLCC"/>
            </Route>
            <Route path="/AAHUNG FOUNDATION" exact >
                <NGOPage name="AAHUNG FOUNDATION"/>
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
            <Route path="/AMAN FOUNDATION" exact >
                <NGOPage name="AMAN FOUNDATION"/>
            </Route>
            <Route path="/CHHIPA FOUNDATION" exact >
                <NGOPage name="CHHIPA FOUNDATION"/>
            </Route>
            <Route path="/FIX IT" exact >
                <NGOPage name="FIX IT"/>
            </Route>
            <Route path="/JDC" exact >
                <NGOPage name="JDC"/>
            </Route>
            <Route path="/LYARIANZ YOUTH DEVELOPMENT PROGRAM" exact >
                <NGOPage name="LYARIANZ YOUTH DEVELOPMENT PROGRAM"/>
            </Route>
            <Route path="/ROBIN HOOD ARMY" exact >
                <NGOPage name="ROBIN HOOD ARMY"/>
            </Route>
            <Route path="/A.P.H.A ORGANIZATION" exact >
                <NGOPage name="A.P.H.A ORGANIZATION"/>
            </Route>
            <Route path="/APEX EDUCATION FORUM" exact >
                <NGOPage name="APEX EDUCATION FORUM"/>
            </Route>
            <Route path="/DEWA ACADEMY" exact >
                <NGOPage name="DEWA ACADEMY"/>
            </Route>
            <Route path="/MARKAZ-E-UMEED" exact >
                <NGOPage name="MARKAZ-E-UMEED"/>
            </Route>
            <Route path="/PAKISTAN YOUTH ORGANIZATION" exact >
                <NGOPage name="PAKISTAN YOUTH ORGANIZATION (PYO)"/>
            </Route>
            <Route path="/THE CITIZENS FOUNDATION" exact >
                <NGOPage name="THE CITIZENS FOUNDATION (TCF)"/>
            </Route>
            <Route path="YOUTH EXPRESS PAKISTAN">
                <NGOPage name="YOUTH EXPRESS PAKISTAN"/>
            </Route>
        </Switch>
        <MyFooter theme={props.themeColor} />
    </Layout>
)
