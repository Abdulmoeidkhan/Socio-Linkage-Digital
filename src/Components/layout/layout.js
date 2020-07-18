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
import { MyHeader } from "../header/header"
import { AboutUs } from '../content/about/about';
import { NGOPage } from "../content/NGO'sPage/NGO'sPage"
import { NGOsRoute } from "../contentRawData/contentRawData"
import { Application } from "../content/application/application"
import { PakistanPage } from "../content/pakistanPage/pakistanPage"
import { AdminDashBoard } from "../admin/adminDashboard/adminDashboard"
import {AdminSignIn} from "../admin/adminLogIn"
import MyComparison from "../content/comparison/comparison"
import firebase from "../Config/firebaseConfig"
import { TandC } from '../content/termsAndConditions/termsAndConditions';
import { PrivacyPolicy } from '../content/privacyPolicy/privacyPolicy';
// const { Header } = Layout;




export const MyLayout = (props) => {
    const [isSignIn, setIsSignIn] = useState(false)
    const [isAdminSignIn, setIsAdminSignIn] = useState(false)
    useEffect(() => {
        console.log(isSignIn)
        if (!isSignIn) {
            if (firebase.currentUsers()) { setIsSignIn(true) }
        }
        if (!isAdminSignIn) {
            firebase.currenAdminUser().then(response=>{
                setIsAdminSignIn(response.flag)
            })
        }
    })

    return (
        <Layout className={`site-layout ${props.themeColor}`}>
            <MyHeader themeColor={props.themeColor} themeChanger={props.themeChanger} history={props.history} showDrawer={props.showDrawer} setIsSignIn={setIsSignIn} setIsAdminSignIn={setIsAdminSignIn}/>
            <Switch>
                <Route path="/" exact key="1" component={HomeContent} />
                <Route path="/aboutUs" exact key="2" component={AboutUs} />
                <Route path="/Comparison" exact key="3" component={MyComparison} />
                <Route path="/Pakistan" exact key="4" component={PakistanPage} />
                <Route path="/Admin" exact key="5" >
                    {isAdminSignIn?<AdminDashBoard/>:<AdminSignIn setIsAdminSignIn={setIsAdminSignIn}/>}
                </Route>
                <Route path="/ApplicationForm" exact key="6">
                    <>
                        {isSignIn ? <Application /> : <div className="notFoundClass"><h2>Please Sign In First for this page</h2></div>}
                    </>
                </Route>
                <Route path="/T&C" exact key="7" component={TandC} />
                <Route path="/PrivacyPolicy" exact key="8" component={PrivacyPolicy} />
                {NGOsRoute.map((item, i) => <Route key={i + 9} path={`/${item}`} exact >
                    <NGOPage name={`${item}`} />
                </Route>)}
            </Switch>
            <MyFooter theme={props.themeColor} />
        </Layout>
    )
}
