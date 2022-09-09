import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import RoleForm from './RoleForm';
import axios from "axios";
import "./role.css"

const RoleHead = (props) => {
  const { selectedRoleName } = props
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    console.log('Finish:', values);
  };

  return (
    <>
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
        <Form.Item
            name="name"
            label="角色名："
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your username!',
            //   },
            // ]}
        >
            <Input placeholder="请输入角色名" />
        </Form.Item>
        <Form.Item shouldUpdate>
            {() => (
            <Button
                type="primary"
                htmlType="submit"
            >
                查询
            </Button>
            )}
        </Form.Item>
        <Form.Item shouldUpdate>
            {() => (
            <Button
                htmlType="reset"
            >
                重置
            </Button>
            )}
        </Form.Item>
        <Form.Item shouldUpdate>
            {() => (
                <RoleForm></RoleForm>
            )}
        </Form.Item>
        <div className='role-menu-tip'>
            {selectedRoleName ? <span className='font'>当前角色权限：{selectedRoleName}</span>:<span className='font'>请在左侧列表中选择一个角色！</span>}
            <Button disabled={!selectedRoleName} type="primary">保存权限</Button>
        </div>
        </Form>
    </>
  );
};

export default RoleHead