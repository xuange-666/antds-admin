import { Divider, Table, Tag, Space, message, Popconfirm } from 'antd';
import React, { useState,useEffect } from 'react';
import axios from 'axios';

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

// const data = [];
// for(let i=0;i<6;i++){
//     data.push({
//         key:i,
//         name: `张三${i}`,
//         type:`晨报许愿`,
//     });
// }
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//   },
//   getCheckboxProps: (record) => ({
//     disabled: record.name === 'Disabled User',
//     // Column configuration not to be checked
//     name: record.name,
//   }),
// };
const RoleTab = (props) => {
  console.log(props)
  const {states,onChange} = props
  const [menus,setMenus] = useState([]) //定义一个初始状态menus
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("http://127.0.0.1:9000/menus")
      console.log(data)
      await setMenus(data) //异步的
    }
    fetchData();
  },[])
  return (
    <div>
      <Table
        rowSelection={{
          selectedRowKeys:states.selectedKeys,
          onChange
        }}
        columns={columns}
        dataSource={menus}
        pagination={false}
      />
    </div>
  );
};

export default RoleTab;