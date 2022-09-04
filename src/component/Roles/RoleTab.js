import { Divider, Table, Tag, Space, message, Popconfirm } from 'antd';
import React, { useState,useEffect } from 'react';

//删除时确认的函数
const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };

const columns = [    //表头
  {
    title: 'id',
    dataIndex: 'key',
  },
  {
    title: '名称',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '类型',
    dataIndex: 'type',
  },
];

const data = [];
for(let i=0;i<6;i++){
    data.push({
        key:i,
        name: `张三${i}`,
        type:`晨报许愿`,
    });
}
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
const RoleTab = () => {
  useEffect(() => {

  },[])
  return (
    <div>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default RoleTab;