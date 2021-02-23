import React, { useState } from 'react';
import {
  Form,
  Input,
  Row,
  Col,
  Select,
  Button,
} from 'antd';
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 12,
    },
    sm: {
      span: 8,
    },
  },
};

const Register = () => {
  
  const history = useHistory();

  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    
    console.log('Received values of form: ', values);
    history.push("/auth/login");

  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value=""></Option>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );
  const [] = useState([]);

  return (
    <Router>
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }} >
      <Col span={4}>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: '+91',
          }}
          scrollToFirstError
        >

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              }, {
                min: 10,
                message: 'Min 10'
              },
              {
                max: 10,
                message: 'Max 10'
              }
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '250%',
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
        </Button>
          </Form.Item>
          
        </Form>
      </Col>
    </Row>
            
    </Router>
  );
};

export default Register;