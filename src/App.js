import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { MyLayout } from "./Components/layout/layout"
import {
  BrowserRouter as Router,
  Link,
  useHistory
} from "react-router-dom";


const { Sider} = Layout;
const { SubMenu } = Menu;
let App = () => {
  let history=useHistory()

  const [themeColor, setThemeColor] = useState({ theme: 'light' });
  const [collapsedByMe, setCollapsed] = useState({ collapsed: true, })

  let onCollapse = collapsed => {
    collapsed = !collapsedByMe.collapsed
    setCollapsed({ collapsed: collapsed, })
  };
  let changeTheme = value => {
    setThemeColor({ theme: value === true ? 'light' : 'dark' })
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Router>
        <Sider collapsible collapsed={collapsedByMe.collapsed} onCollapse={onCollapse} theme={themeColor.theme}>
          <div className="logo" />
          <Menu theme={themeColor.theme} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={
              <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-child" style={{ fontSize: "24px" }}></i> */}
                <img src={require("./Components/icons/Children.png")}/>
              </span>
            }>
              <Link to="/Children"> Children
            </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={
              <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className='fa fa-graduation-cap'></i> */}
                <img src={require("./Components/icons/Education.png")}/>
              </span>
            } title=" Education"
            >
              <Link to="/Education"> Education
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={
              <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-heartbeat"></i> */}
                <img src={require("./Components/icons/Health.png")}/>
              </span>
            } title=" Health">
              <Menu.Item key="3">
                <Link to="/Tom"> Tom
              </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/Bill"> Bill
              </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/Alex"> Alex
              </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="sub2" icon={
              <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-pencil-square-o"></i> */}
                <img src={require("./Components/icons/Vocation.png")}/>
              </span>
            } title=" Vocational">
              <Link to="/Vocational"> Vocation
              </Link>
            </Menu.Item>
            <Menu.Item key="9" icon={
              <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-female"></i> */}
                <img src={require("./Components/icons/Women.png")}/>
              </span>
            } >
              <Link to="/Womens"> Women
            </Link>
            </Menu.Item>
            <Menu.Item key="10" icon={
              <span role="img" aria-label="team" className="anticon anticon-team">
                {/* <i className="fa fa-link"></i> */}
                <img src={require("./Components/icons/Community.png")}/>
              </span>
            } >
              <Link to="/Community"> Community
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <MyLayout themeChanger={changeTheme} themeColor={themeColor.theme} history={history}/>
      </Router>
    </Layout>
  );
}

export default App