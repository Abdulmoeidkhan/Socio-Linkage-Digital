import React, { useState } from "react"
import { Form, Input, Button, Checkbox, Typography } from 'antd';


const { Link } = Typography



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export const SignUp = (props) => {
    const [signUp, setSignUp] = useState(true)

    const onFinishFailed = errorInfo => {
        // console.log('Failed:', errorInfo);
    };
    return (<>
        {signUp == true ?
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={props.signIn}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Emai;!' }]}
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
                <Form.Item>
                    <Link href="#" onClick={() => setSignUp(!signUp)} className="cursorClass">
                        {signUp ? `Already Registered With Us ???` : `Not Yet Registered With Us ???`}
                    </Link>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </Form.Item>
            </Form> :
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={props.logIn}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Emai;!' }]}
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
                <Form.Item>
                    <Link href="#" onClick={() => setSignUp(!signUp)} className="cursorClass">
                        {!signUp ? `Not Yet Registered With Us ???` : `Already Registered With Us ???`}
                    </Link>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" >
                        Submit
                </Button>
                </Form.Item>
            </Form>}
    </>
    );
};
