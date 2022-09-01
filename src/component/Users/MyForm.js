import { Button, Form, Input, Select } from 'antd';
import React from 'react';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const MyForm = (props) => {
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="用户名"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input defaultValue={props.formuser.name}/>
      </Form.Item>
      <Form.Item
        name="age"
        label="年龄"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input defaultValue={props.formuser.age}/>
      </Form.Item>
      <Form.Item
        name="work"
        label="工作"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
          defaultValue={props.formuser.work}
        >
          <Option value="male">前端开发</Option>
          <Option value="female">后端开发</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="zhiwei"
        label="职位"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
          defaultValue={props.formuser.zhiwei}
        >
          <Option value="male">研发</Option>
          <Option value="female">管理</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="character"
        label="角色"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
          defaultValue="普通用户"
        >
          <Option value="male">管理员</Option>
          <Option value="female">普通用户</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default MyForm;