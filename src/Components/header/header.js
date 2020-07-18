import React from 'react';
import { Layout, Menu, Switch, Collapse, Button } from 'antd';
import 'antd/dist/antd.css';
import "./header.css"
import HamBurgerNav from "../hamburgerNav/hamburgerNav.js"
import {
    useHistory,
    Link
} from "react-router-dom";
import {
    MenuUnfoldOutlined
} from '@ant-design/icons';

const { Header } = Layout;
const { Panel } = Collapse;
export const MyHeader = (props) => {
    let history = useHistory()

    return (
        <Header className="site-layout-background" style={{ padding: 0 }} >
            <div className="logo" />
            <Menu theme={props.themeColor} mode="horizontal" defaultSelectedKeys={['1']} >
                <Menu.Item key="5" className="mobClass">
                    <Button type="primary" onClick={props.showDrawer} icon={<MenuUnfoldOutlined />} />
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to="/">
                        <img className="headerLogoIcon" src={require("../icons/Colors Without Text-Final.png")} alt={require("../icons/Colors Without Text-Final.png")} />
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" className="specialClassForHeaderPanelClass">
                    <Collapse accordion >
                        <Panel className="headerPanelClass" header={<img className="headerWorldIcon" src={require("../icons/Pak Map.png")} />} alt={require("../icons/Pak Map.png")} key="1">
                            <div onClick={
                                () => { history.push("/Pakistan") }
                            }
                                key="1"
                            >
                                Pakistan
                            </div>
                            <div onClick={() => { history.push("/Balochistan") }} key="3">
                                Balochistan
                            </div>
                            <div onClick={() => { history.push("/GilgitBaltistan") }} key="4">
                                Gilgit Baltistan
                            </div>
                            <div onClick={() => { history.push("/KPK") }} key="5">
                                Khyber Pakhtun khuwa
                            </div>
                            <div onClick={() => { history.push("/Punjab") }} key="6">
                                Punjab
                            </div>
                            <div onClick={() => { history.push("/Sindh") }} key="7">
                                Sindh
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
                    <HamBurgerNav mode={props.themeColor} setIsSignIn={props.setIsSignIn} setIsAdminSignIn={props.setIsAdminSignIn} />
                </Menu.Item>
            </Menu>
        </Header >
    )
}