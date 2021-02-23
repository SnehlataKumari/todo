import React from 'react';
import { connect } from "react-redux";
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  Divider,
  List
} from 'antd';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import store from '../redux/store';
import { saveLink, incrementCount, deleteLink } from '../redux/actions/link';

const onDelete = ({ hash }) => {
  store.dispatch(deleteLink({ hash }));
};

const onIncrement = ({hash}) => {
  store.dispatch(incrementCount({hash}));
};

const Shorter = ({ links }) => {
  const [form] = Form.useForm();
  const onFinish = ({ link }) => {
    console.log(link);
    // Step 1: Generate hash for link
    const randomNumer = Math.floor(Math.random() * 90000) + 10000;

    // Step 2: Save Hash with link in store
    store.dispatch(saveLink({ hash: randomNumer, link }));
  }

  // step 3: UI = done
  // step 4: show whole link with short link = done
  // step 5: create reducer for deleting a link = 
  return (
    <Router>
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '40vh' }} >
        <Col span={4} pull={2}>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >

            <Form.Item
              name="link"
              label="Enter a URL"
              rules={[
                {
                  required: true,
                  message: 'Please Enter a URL!',
                },
              ]}
            >
              <Input
                style={{
                  width: '250%',
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Short
              </Button>
            </Form.Item>

          </Form>
        </Col>

      </Row>
      <Row justify="center" align="top">
        <Col span={10} value={120} flex={100}>
          <Divider orientation="left">Shorted Links:</Divider>
          <List
            size="small"
            bordered
            dataSource={Reflect.ownKeys(links).map((linkHash) => ({
              link: links[linkHash],
              hash: linkHash
            }))}
            renderItem={item => <List.Item>
              <a href={item.link.link} target="_blank" onClick={() => { onIncrement(item) }}> http://locahost:3000/link/{item.hash} </a>
              <u>   :   {item.link.link}</u> {item.link.count}
              <button onClick={() => { onDelete(item) }} >Delete</button>
            </List.Item>}

          />


        </Col>

      </Row>

    </Router>
  );
}
const mapStateToProps = (state) => ({
  links: state.link.links
});


export default connect(mapStateToProps)(Shorter);


// Problem Statement: on opening short link in a new tag exact link should open
// Step 1: Make a route "/link/:hashParam"
// Step 2: Make a page [linkPage.js] for "/link/:hashParam"
// Step 3: Get "hashParam" from route using React Router.
// Step 4: Dispatch action incrementCount(hashParam).
// Step 5: Get link{link, count} from store for "hashParam".
// Step 6: Redirect to "link".
