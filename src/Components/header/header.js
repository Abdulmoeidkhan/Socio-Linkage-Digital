import React from 'react';
import { Layout, Menu, Switch, Collapse } from 'antd';
import 'antd/dist/antd.css';
import "./header.css"
import HamBurgerNav from "../hamburgerNav/hamburgerNav.js"
import {
    BrowserRouter as Router,
    useHistory,
    Link
} from "react-router-dom";

const { Header } = Layout;
const { Panel } = Collapse;
export const MyHeader = (props) => {
    let history = useHistory()

    return (
        <Header className="site-layout-background" style={{ padding: 0 }} >
            <div className="logo" />
            <Menu theme={props.themeColor} mode="horizontal" defaultSelectedKeys={['1']} >
                <Menu.Item key="1">
                    <Link to="/">
                    <img className="headerLogoIcon" src={require("../icons/Colors Without Text-Final.png")} />
                </Link>
                </Menu.Item>
                <Menu.Item key="2" className="specialClassForHeaderPanelClass">
                    <Collapse accordion >
                        <Panel className="headerPanelClass" header={<img className="headerWorldIcon" src={require("../icons/Pak Map.png")} />} key="1">
                            <div onClick={
                                () => { history.push("/PakistanNGO's") }
                            }>
                                Pakistan
                            </div>
                        </Panel>
                    </Collapse> 
                </Menu.Item>
                {/* <Menu.Item key="3">
                        <Link to="/ContactUs">Contact Us</Link>
                    </Menu.Item> */}
                <Menu.Item key="3" className="switchClass menuNonListPart">
                    <Switch checkedChildren="Dark" unCheckedChildren="Light" defaultChecked onChange={props.themeChanger} />
                </Menu.Item>
                <Menu.Item key="4" className="menuNonListPart">
                    <HamBurgerNav mode={props.themeColor} />
                </Menu.Item>
            </Menu>
        </Header>
    )
}