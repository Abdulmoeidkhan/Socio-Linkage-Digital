import React, { useState, useEffect, } from 'react';
import { Layout, Spin, Space } from 'antd';
import NGOSideMenuList from "./Components/ngoSideMenuList/ngoSideMenuList"
import { MyLayout } from "./Components/layout/layout"
import './App.css';
import 'antd/dist/antd.css';
import firebase from "./Components/Config/firebaseConfig"
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";


let App = () => {
  const [themeColor, setThemeColor] = useState({ theme: 'light' });
  
  const [visible, setVisible] = useState(false);
  const [firebaseInitializes, setfirebaseInitializes] = useState(false)
  let history = useHistory()
  

  let changeTheme = value => {
    setThemeColor({ theme: value === true ? 'light' : 'dark' })
  }
  const showDrawer = () => {
    setVisible(true);
  };
  useEffect(() => {
    firebase.isInitialized().then(val => {
      setfirebaseInitializes(true)
      // console.log(firebaseInitializes)
    })
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return firebaseInitializes ? (
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <NGOSideMenuList visible={visible} setVisible={setVisible} themeColor={themeColor} />
          <MyLayout themeChanger={changeTheme} themeColor={themeColor.theme} history={history} showDrawer={showDrawer} firebase={firebase}/>
          <div className="arrowUpKey" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}><i className="fa fa-x fa-arrow-up" style={{ color: "#fff" }} aria-hidden="true"></i></div>
        </Router>
      </Layout>
  ) : (<Space>
    <Spin size="large" />
  </Space>)
}

export default App