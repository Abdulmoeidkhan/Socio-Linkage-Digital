import React, { useState, useEffect } from 'react';
import { Drawer, Button, Collapse, Modal } from 'antd';
import "./hamburgerNav.css"
import { MenuFoldOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { SignUp } from "../content/signUp/signUp.js"
import firebase from "../Config/firebaseConfig"



const { Panel } = Collapse;

const HamBurgerNav = (props) => {
  const [visible, setVisible] = useState(false);
  const [visibleModal, setvisibleModal] = useState(false)
  const [currentUsersData, setcurrentUsersData] = useState(false)

  const showDrawer = () => {
    setVisible(true);
  };
  const showModal = () => {
    setvisibleModal(!visibleModal)
  }

  const onClose = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setvisibleModal(!visibleModal)
  };
  async function signIn(values) {
    console.log("SignUp", values)
    await firebase.signUp(values.username, values.email, values.password).then(() => {
      alert("You have signed Up successfully ")
    })
    onClose()
  }
  async function logIn(values) {
    console.log("SignIn", values.email, values.password)
    await firebase.login(values.email, values.password).then(() => {
      alert("You have sign In successfully ")
    })
    onClose()
  }
  async function logOut (){
    await firebase.logout().then(()=>{
      alert("You have sign Out successfully ")
    })
    onClose()
  }
  let history = useHistory()
  useEffect(() => {
    if (firebase.currentUsers()) {
      console.log(firebase.currentUsers())
      setcurrentUsersData(true)
    }
  })
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
        <div className="cursorClass">
          <p onClick={() => {
            onClose()
            history.push("/Comparison")
          }}>
            Comparison
          </p>
        </div>
        <div className="cursorClass">
          {!currentUsersData ?
            <>
              <Button type="primary" onClick={showModal}>
                Register With Us
        </Button>
              <Modal
                title="Sign Up"
                visible={visibleModal}
                onCancel={handleCancel}
                footer={null}
              >
                <SignUp signIn={signIn} logIn={logIn} />
              </Modal>
            </>
            : <Button type="primary" onClick={() => logOut()}>
              logOut
        </Button>
          }
        </div>
      </Drawer>
    </>
  );
};
export default HamBurgerNav