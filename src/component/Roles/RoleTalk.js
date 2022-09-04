import { Modal, Button } from 'antd';
import React, { useState } from 'react';

const RoleTalk = (props) => {
  console.log(props)
  const [visible, setVisible] = useState(false);    //决定model的消失和显示
  const [confirmLoading, setConfirmLoading] = useState(false);   //决定确认按钮的loading状态
//   const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <span onClick={showModal}>编辑</span>
      <Modal
        title="修改用户"
        visible={visible}
        footer={
            [
                <Button type='primary' onClick={handleOk} loading={confirmLoading}>保存</Button>,
                <Button onClick={handleCancel}>重置</Button>
            ]
        }
      >
        <p>角色管理</p>
      </Modal>
    </>
  );
};

export default RoleTalk;