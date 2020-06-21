import React, { useEffect, useState } from 'react';
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
import { NGOsRoute } from "../contentRawData.js/contentRawData"
import { Application } from "../content/application/application"
import {PakistanPage} from "../content/pakistanPage/pakistanPage"
import MyComparison from "../content/comparison/comparison"
import firebase from "../Config/firebaseConfig"
// const { Header } = Layout;




export const MyLayout = (props) => {
    const [isSignIn, setIsSignIn] = useState(false)

    useEffect(() => {
        // console.log(isSignIn)
        if (!isSignIn) {
            if (firebase.currentUsers()) { setIsSignIn(true) }
        }
    })

    return (
        <Layout className={`site-layout ${props.themeColor}`}>
            <MyHeader themeColor={props.themeColor} themeChanger={props.themeChanger} history={props.history} showDrawer={props.showDrawer} setIsSignIn={setIsSignIn} />
            <Switch>
                <Route path="/" exact key="1" component={HomeContent} />
                <Route path="/aboutUs" exact key="2" component={AboutUs} />
                <Route path="/Comparison" exact key="3" component={MyComparison} />
                <Route path="/Pakistan" exact key="4" component={PakistanPage} />
                <Route path="/ApplicationForm" exact key="5">
                    <>
                        {isSignIn ? <Application /> : <div className="notFoundClass"><h2>Please Sign In First for this page</h2></div>}
                    </>
                </Route>
                {NGOsRoute.map((item, i) => <Route key={i + 5} path={`/${item}`} exact >
                    <NGOPage name={`${item}`} />
                </Route>)}
            </Switch>
            <MyFooter theme={props.themeColor} />
        </Layout>
    )
}
