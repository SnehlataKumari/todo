import React from 'react';
import { connect } from "react-redux";
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {addTodo, deleteTodo} from '../redux/actions/todo';
import store from '../redux/store';
 
const deleteTodos = tasks => {
  console.log(tasks);

  store.dispatch(deleteTodo({ tasks }));
}
    const Todo = ({todos}) => {
      const onFinish = tasks => {
        console.log(tasks);
        // console.log('Received values of form:',tasks);
        store.dispatch(addTodo({tasks}));
      };  

    return (
      <Form name="todo_form" onFinish={onFinish} autoComplete="off">
        <Form.List name="tasks">
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 8, left: "600px", width: "200%", textAlign: "center" } } align="baseline">
                  <Form.Item
                    {...field}
                    name={[field.name, 'todo']}
                    fieldKey={[field.fieldKey, 'todo']}
                    rules={[{ required: true, message: 'Enter a task to do' }]}
                  >
                    <Input placeholder="Add a task to do...." style={{left: "600px", width: "200%", textAlign: "center"}}   />
                  </Form.Item>
                  <MinusCircleOutlined style={{width: '11250%'}}  onClick={() => {
                    remove(field.name);
                    deleteTodos(field.name);
                  }} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Tasks
              </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    );
  };
const mapStateToProps = (state) => ({
  todos: state.todo.todos
});


export default connect(mapStateToProps)(Todo);