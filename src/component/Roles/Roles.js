import { Table,Layout,Spin,Divider } from 'antd';
import RoleHead from './RoleHead';
import RoleTable from './RoleTable';
import RoleTab from './RoleTab';
import { useState,useEffect } from 'react';
import axios from 'axios';

const { Sider, Content } = Layout;

function Roles(){
  const [isLoading,setIsLoading] = useState(true)
  const [states,setStates] = useState({selectedKeys:['首页','文档']})  //所有被选中的row的key值 
  const [data,setData] = useState([])
  const [selectedRoleName,setSelectedRoleName] = useState("admin")
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("http://127.0.0.1:9000/roles")
      console.log(data)
      await setData(data) //异步的
      await setIsLoading(false)
    }
    fetchData();
  },[])
  let getMenus = async (id) => {   //用于获取单个角色的权限
    let {data} = await axios.get(`http://127.0.0.1:9000/roles?id=${id}`)
    await setStates({selectedKeys:data[0].menu})
    await setIsLoading(false)
  }
  let onChange = ( selectedRowKeys, selectedRows ) => {
    console.log(selectedRowKeys,selectedRows)
    setStates({selectedKeys:selectedRowKeys})
  }
  return (
    <Spin spinning={isLoading}>
      <RoleHead selectedRoleName = {selectedRoleName}></RoleHead>
      <Divider></Divider>
      <Layout>
        <Sider width="60%">
          <RoleTable isLoading={isLoading} setIsLoading={setIsLoading} data={data} getMenus={getMenus}></RoleTable>
        </Sider>
        <Content style={{width:'30%'}}>
          <RoleTab states={states} onChange={onChange}></RoleTab>
        </Content>
      </Layout>
    </Spin>
  )
}
export default Roles