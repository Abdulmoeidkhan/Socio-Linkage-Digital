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
import { NGOPage } from "../content/NGO'sPage/NGO'sPage.js"

// const { Header } = Layout;


const NGOsRoute = ["RLCC",
    "AAHUNG FOUNDATION",
    "AZAD FOUNDATION",
    "DAR-UL-SUKUN",
    "EDHI FOUNDATION",
    "KONPAL CHILD ABUSE PREVENTION SOCIETY",
    "MAKE A WISH",
    "SOS VILLAGE",
    "AMAN FOUNDATION",
    "CHHIPA FOUNDATION",
    "FIX IT",
    "JDC",
    "LYARIANZ YOUTH DEVELOPMENT PROGRAM",
    "ROBIN HOOD ARMY",
    "A.P.H.A ORGANIZATION",
    "APEX EDUCATION FORUM",
    "DEWA ACADEMY",
    "MARKAZ-E-UMEED",
    "PAKISTAN YOUTH ORGANIZATION",
    "THE CITIZENS FOUNDATION",
    "YOUTH EXPRESS PAKISTAN"]

export const MyLayout = (props) => (
    <Layout className={`site-layout ${props.themeColor}`}>
        <MyHeader themeColor={props.themeColor} themeChanger={props.themeChanger} history={props.history} showDrawer={props.showDrawer} />
        <Switch>
            <Route path="/" exact key="1" component={HomeContent} />
            <Route path="/aboutUs" exact key="2" component={AboutUs} />
            {NGOsRoute.map((item, i) => <Route key={i+2} path={`/${item}`} exact >
                <NGOPage name={`${item}`} />
            </Route>)}
        </Switch>
        <MyFooter theme={props.themeColor} />
    </Layout>
)
