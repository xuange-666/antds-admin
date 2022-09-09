import { Divider, Table, Tag, Space, message, Popconfirm } from 'antd';
import React, { useState,useEffect } from 'react';
import RoleTalk from './RoleTalk';

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
  
  return (
    <div>
      <Table
        columns={columns}
        dataSource={props.data}
        pagination={false}
        scroll={{y:440}}
        onRow={record => {
            return {
                onClick: async function(ev){
                  console.log(record)
                    await props.setIsLoading(true)
                    await props.getMenus(record.id,record.name)
                }
            }
        }}
      />
    </div>
  );
};

export default RoleTable;