import { Divider, Table, Tag, Space, message, Popconfirm } from 'antd';
import React, { useState,useEffect } from 'react';
import Talk from './Talk';
import store from '../../store/store';
import requestTableAsync from '../../store/actions'

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
    dataIndex: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '工作',
    dataIndex: 'work',
  },
  {
    title:"职位",
    dataIndex: 'zhiwei',
  },
  {
    title:"操作",
    dataIndex: 'action',
    render: (_, record) => {
        return (
            <Space size="middle">
                <a><Talk user={record}></Talk></a>
                <Popconfirm
                    title={`您确定删除${record.name}?`}
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="#" style={{color:'red'}}>删除</a>
                </Popconfirm>
            </Space>
        )
    }   
  },
];
//分页的效果
// let data = []
// for(let i=1;i<=100;i++){
//     data.push({
//         id: `${i}`,
//         key: `${i}`,
//         name: `张三${i}`,
//         age: '22',
//         work: '前端研发工程师',
//         zhiwei: '工程师'
//     })
// }

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

const Tables = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [data, setData] = useState([])
  useEffect(() => {
    store.dispatch(requestTableAsync("http://127.0.0.1:9000/users"))  //异步的
    setData(store.getState())
    store.subscribe(async () => {
      await setData(store.getState())
    })
    console.log(store.getState())
  },[])
  return (
    <div>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default Tables;