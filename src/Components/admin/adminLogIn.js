import React, { useState,useEffect } from "react"
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import firebase from "../Config/firebaseConfig"
import "./adminLogin.css"


const { Link } = Typography



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export const AdminSignIn = (props) => {
    const [isSignIn, setIsSignIn] = useState(false)

    useEffect(()=>{
        if (!isSignIn) {
            if (firebase.currentUsers()) { setIsSignIn(true) }
        }
    },[])

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const adminLogIn = (values) => {
        firebase.adminLogin(values.email, values.password, "admin")
            .then((response) => {
                console.log(response.message)
                props.setIsAdminSignIn(response.flag)
                alert(response.message)
            })
    }

    return (
        isSignIn?<h2>Please Logout As a guest User First </h2>:
        <div className="adminForm">
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={adminLogIn}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" >
                        Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
