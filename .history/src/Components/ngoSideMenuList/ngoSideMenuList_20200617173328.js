import React, { useState } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import 'antd/dist/antd.css';
import {
    Link,
} from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const data = {
    children: ["RLCC", "AAHUNG FOUNDATION", "AZAD FOUNDATION", "DAR-UL-SUKUN", "EDHI FOUNDATION", "KONPAL CHILD ABUSE PREVENTION SOCIETY", "MAKE A WISH", "SOS VILLAGE"],
    community: ["AMAN FOUNDATION", "CHHIPA FOUNDATION", "FIX IT", "JDC", "LYARIANZ YOUTH DEVELOPMENT PROGRAM", "ROBIN HOOD ARMY"],
    education: ["A.P.H.A ORGANIZATION", "APEX EDUCATION FORUM", "DEWA ACADEMY", "MARKAZ-E-UMEED", "PAKISTAN YOUTH ORGANIZATION", "THE CITIZENS FOUNDATION", "YOUTH EXPRESS PAKISTAN"]
}

const MyMenu = (props) => (
    <Menu theme={props.themeColor.theme} defaultSelectedKeys={['1']} mode="inline">
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
            {/* <Link to="/health"> Health
              </Link> */}
            <Menu.Item key="19">
                <Link to="/Tom"> Tom
              </Link>
            </Menu.Item>
            <Menu.Item key="20">
                <Link to="/Bill"> Bill
              </Link>
            </Menu.Item>
            <Menu.Item key="21">
                <Link to="/Alex"> Alex
              </Link>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="22" icon={
            <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-link"></i> */}
                <img src={require("../icons/Senior Citizen.png")} />
            </span>
        } >
            <Link to="/seniorCitizen"> Senior Citizen
            </Link>
        </Menu.Item>
        <Menu.Item key="23" icon={
            <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-link"></i> */}
                <img src={require("../icons/Disabled Person.png")} />
            </span>
        } >
            <Link to="/specialPeople"> Special People
            </Link>
        </Menu.Item>
        <Menu.Item key="24" icon={
            <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-pencil-square-o"></i> */}
                <img src={require("../icons/Vocation.png")} />
            </span>
        } title=" Vocational">
            <Link to="/Vocational"> Vocation
              </Link>
        </Menu.Item>
        <Menu.Item key="25" icon={
            <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-female"></i> */}
                <img src={require("../icons/Women.png")} />
            </span>
        } >
            <Link to="/Womens"> Women
            </Link>
        </Menu.Item>
        <Menu.Item key="26" icon={
            <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-link"></i> */}
                <img src={require("../icons/Other.png")} />
            </span>
        } >
            <Link to="/others"> Others
            </Link>
        </Menu.Item>
    </Menu>
)

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
                    <MyMenu props />
                </Sider>
            </Drawer>
            <Sider collapsible collapsed={collapsedByMe.collapsed} onCollapse={onCollapse} theme={props.themeColor.theme} className="desktopClassHeader">
                <div className="logo" />
                <MyMenu props />
            </Sider>
        </>
    )
}



export default NGOSideMenuList