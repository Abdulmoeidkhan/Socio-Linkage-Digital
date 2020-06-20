import React from 'react';
import firebase from "../../../Config/firebaseConfig"
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
} from 'antd';


export const ApplicationForm = (props) => {
    const [form] = Form.useForm();
    const validateMessages = {
        required: '${label} is required!',
    };

    const onFinish = values => {
        let date = values.user.DateOfBirth.format().split("T", 1)
        values.user.DateOfBirth = date[0]
        firebase.formSubmit(values.user).then(value => {
            return (alert(value))
        }
        )
        props.setFormSubmitted(true)
        form.resetFields();
    };
    return (
        <div className="applicationForms">
            <h2>Application Form</h2>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                name="nest-messages" 
                onFinish={onFinish} 
                validateMessages={validateMessages}
                form={form}
            >
                <Form.Item
                    label={` Email`}
                    name={['user', 'Email']}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={` Contact Number`}
                    name={['user', 'ContactNumber']}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Gender"
                    name={['user', 'Gender']}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="Male">Male</Select.Option>
                        <Select.Option value="Female">Female</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="CNIC"
                    name={['user', 'CNIC']}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Date Of Birth"
                    name={['user', 'DateOfBirth']}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name={['user', 'Address']}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    label="Remarks"
                    name={['user', 'Remarks']}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="Submit">
                    <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};