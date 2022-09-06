import { Divider, Table, Tag, Space, message, Popconfirm } from 'antd';
import React, { useState,useEffect } from 'react';
import RoleTalk from './RoleTalk';
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
    title: '#',
    dataIndex: 'key',
  },
  {
    title: '角色名称',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '描述',
    dataIndex: 'describle',
  },
  {
    title:"操作",
    dataIndex: 'action',
    render: (_, record) => {
        return (
            <Space size="middle">
                <a><RoleTalk user={record}></RoleTalk></a>
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

// const data = [];
// for(let i=0;i<30;i++){
//     data.push({
//         key:i,
//         name: `张三${i}`,
//         describle:`sadasdasd${i}`,
//     });
// }

const RoleTable = (props) => {
  // const [rowId,setRowId] = useState(0)
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("http://127.0.0.1:9000/roles")
      console.log(data)
      await setData(data) //异步的
    }
    fetchData();
  },[])
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{y:440}}
        onRow={record => {
            return {
                onClick: async function(ev){
                    await props.setIsLoading(true)
                }
            }
        }}
      />
    </div>
  );
};

export default RoleTable;