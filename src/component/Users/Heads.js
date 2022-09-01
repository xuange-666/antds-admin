import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';

const Heads = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="名称："
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please input your username!',
        //   },
        // ]}
      >
        <Input placeholder="请输入名称" />
      </Form.Item>
      <Form.Item name="职位" label="职位：">
        <Input placeholder="请填写职位"/>
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
          >
            提交
          </Button>
        )}
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            htmlType="submit"
          >
            重置
          </Button>
        )}
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
          >
            添加
          </Button>
        )}
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            删除
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Heads