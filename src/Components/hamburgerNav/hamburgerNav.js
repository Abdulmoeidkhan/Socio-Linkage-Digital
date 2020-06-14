import React, { useState } from 'react';
import { Drawer, Button, Collapse } from 'antd';
import "./hamburgerNav.css"
import {
  MenuFoldOutlined
} from '@ant-design/icons';
import {
  useHistory,
  Link
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
        title={<div><img className="headerWorldIcon2" src={require("../icons/Colors Without Text-Final.png")} /><h2 className="siderHeading">Socio-Linkage</h2></div>}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        className={props.mode}
      >
        <div className="cursorClass"><Collapse accordion className="headerPanelClassForSideNav">
          <Panel style={{ border: "none" }} header={<div style={{ color: "#fff" }}><img className="headerWorldIcon" src={require("../icons/Pak Map.png")} /> Regions</div>} key="1">
            <div onClick={
              () => { history.push("/PakistanNGO's") }
            }>
              Pakistan
                            </div>
          </Panel>
        </Collapse></div>
        <div className="cursorClass">
          <p onClick={() => {
            onClose()
            history.push("/aboutUs")
          }}>
            About Us
          </p>
        </div>
        <p className="cursorClass">Some contents...</p>
      </Drawer>
    </>
  );
};
export default HamBurgerNav