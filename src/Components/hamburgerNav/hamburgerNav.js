import React, { useState } from 'react';
import { Drawer, Button,Collapse } from 'antd';
import "./hamburgerNav.css"
import {
  MenuFoldOutlined
} from '@ant-design/icons';
import {
  useHistory,
} from "react-router-dom";


const { Panel } = Collapse;

const HamBurgerNav = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  let history = useHistory()
  return (
    <>
      <Button onClick={showDrawer} icon={<MenuFoldOutlined />}>
      </Button>
      <Drawer
        title={<img className="headerWorldIcon2" src={require("../icons/Colors-Final.png")} />}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        className={props.mode}
      >
        <div><Collapse accordion className="headerPanelClassForSideNav">
          <Panel style={{border:"none"}} header={<div style={{color:"#fff"}}><img className="headerWorldIcon" src={require("../icons/Pak Map.png")} /> Regions</div>} key="1">
            <div onClick={
              () => { history.push("/PakistanNGO's") }
            }>
              Pakistan
                            </div>
          </Panel>
        </Collapse></div>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default HamBurgerNav