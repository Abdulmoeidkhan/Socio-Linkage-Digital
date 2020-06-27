import React, { useState } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import 'antd/dist/antd.css';
import {
    Link,
} from "react-router-dom";
import {data} from "../contentRawData/contentRawData"

const { Sider } = Layout;
const { SubMenu } = Menu;



const MyMenu = (props) => {
    return (
        <Menu theme={props.myProps.themeColor.theme} defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="1" icon={
                <span role="img" aria-label="team" className="anticon anticon-team">
                    {/* <i className="fa fa-child" style={{ fontSize: "24px" }}></i> */}
                    <img src={require("../icons/Children.png")} />
                </span>
            } title=" Children">
                {data.children.map((item, i) => (
                    <Menu.Item key={i + 1}>
                        <Link to={`/${item}`}> {`${item}`}
                        </Link>
                    </Menu.Item>
                ))}
            </SubMenu>
            <SubMenu key="10" icon={
                <span role="img" aria-label="team" className="anticon anticon-team">
                    {/* <i className="fa fa-link"></i> */}
                    <img src={require("../icons/Community.png")} />
                </span>
            } title=" Community">
                {data.community.map((item, i) => (
                    <Menu.Item key={i + 10}>
                        <Link to={`/${item}`}> {`${item}`}
                        </Link>
                    </Menu.Item>
                ))}
            </SubMenu>
            <SubMenu key="17" icon={
                <span role="img" aria-label="team" className="anticon anticon-team">
                    {/* <i className='fa fa-graduation-cap'></i> */}
                    <img src={require("../icons/Education.png")} />
                </span>
            } title=" Education">
                {data.education.map((item, i) => (
                    <Menu.Item key={i + 17}>
                        <Link to={`/${item}`}> {`${item}`}
                        </Link>
                    </Menu.Item>
                ))}
            </SubMenu>
            <SubMenu key="18" icon={
                <span role="img" aria-label="team" className="anticon anticon-team">
                    {/* <i className="fa fa-heartbeat"></i> */}
                    <img src={require("../icons/Health.png")} />
                </span>
            } title=" Health">
                {data.health.map((item, i) => (
                    <Menu.Item key={i + 18}>
                        <Link to={`/${item}`}> {`${item}`}
                        </Link>
                    </Menu.Item>
                ))}
            </SubMenu>
            <SubMenu key="22" icon={
                <span role="img" aria-label="team" className="anticon anticon-team">
                    {/* <i className="fa fa-link"></i> */}
                    <img src={require("../icons/Senior Citizen.png")} />
                </span>
            } title="Senior Citizen">
            </SubMenu>
            <SubMenu key="23" icon={
                <span role="img" aria-label="team" className="anticon anticon-team">
                    {/* <i className="fa fa-link"></i> */}
                    <img src={require("../icons/Disabled Person.png")} />
                </span>
            } title="Special People">
            </SubMenu>
            <SubMenu key="24" icon={
                <span role="img" aria-label="team" className="anticon anticon-team">
                    {/* <i className="fa fa-pencil-square-o"></i> */}
                    <img src={require("../icons/Vocation.png")} />
                </span>
            } title=" Vocational">
              {data.vocation.map((item, i) => (
                    <Menu.Item key={i + 17}>
                        <Link to={`/${item}`}> {`${item}`}
                        </Link>
                    </Menu.Item>
                ))}
            </SubMenu>
            <SubMenu key="25" icon={
                <span role="img" aria-label="team" className="anticon anticon-team">
                    {/* <i className="fa fa-female"></i> */}
                    <img src={require("../icons/Women.png")} />
                </span>
            } title=" Women">
                {data.womens.map((item, i) => (
                    <Menu.Item key={i + 25}>
                        <Link to={`/${item}`}> {`${item}`}
                        </Link>
                    </Menu.Item>
                ))}
            </SubMenu>
            <SubMenu key="30" icon={
                <span role="img" aria-label="team" className="anticon anticon-team">
                    {/* <i className="fa fa-link"></i> */}
                    <img src={require("../icons/Other.png")} />
                </span>
            } title=" Others">
                {data.womens.map((item, i) => (
                    <Menu.Item key={i + 30}>
                        <Link to={`/${item}`}> {`${item}`}
                        </Link>
                    </Menu.Item>
                ))}
            </SubMenu>
        </Menu>
    )
}

const NGOSideMenuList = (props) => {

    const [collapsedByMe, setcollapsedByMe] = useState({ collapsed: true, })
    let onCollapse = collapsed => {
        collapsed = !collapsedByMe.collapsed
        setcollapsedByMe({ collapsed: collapsed })
    };

    const onClose = () => {
        props.setVisible(false);
    };

    return (
        <>
            <Drawer
                placement="left"
                closable={false}
                onClose={onClose}
                visible={props.visible}
                className={`${props.themeColor.theme} left`}
            >
                <Sider>
                    <div className="logo" />
                    <MyMenu myProps={props} />
                </Sider>
            </Drawer>
            <Sider collapsible collapsed={collapsedByMe.collapsed} onCollapse={onCollapse} theme={props.themeColor.theme} className="desktopClassHeader">
                <div className="logo" />
                <MyMenu myProps={props} />
            </Sider>
        </>
    )
}



export default NGOSideMenuList