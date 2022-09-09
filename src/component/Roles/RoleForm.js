import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, InputNumber, Modal, Typography,Spin } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
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

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const [isLoading,setIsLoading] = useState(false)
  useResetFormOnCloseModal({
    form,
    visible,
  });
  const onFinish = (values) => {
    console.log(values)
    setIsLoading(true)
    // setTimeout(() => {
    //     setIsLoading(false)
    //     onCancel()
    // },2000);
    const {name,key,describle} = values
    axios.post("http://127.0.0.1:9000/roles",qs.stringify({key,name,describle}))
    .then(res => {
        console.log(res)
        setIsLoading(false)
        onCancel()
    })
  }
  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title="添加角色" visible={visible} onOk={onOk} onCancel={onCancel}>
    <Spin spinning={isLoading}>
      <Form form={form} layout="vertical" name="userForm" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="角色名"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="key"
          label="key"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="describle"
          label="描述"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      </Spin>
    </Modal>
  );
};

const RoleForm = () => {
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
      <>
          <Button
            htmlType="button"
            type='primary'
            style={{
              margin: '0 8px',
            }}
            onClick={showUserModal}
          >
            添加
          </Button>

          <ModalForm visible={visible} onCancel={hideUserModal} />
      </>
  );
};

export default RoleForm;