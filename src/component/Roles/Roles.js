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
  // const [roles,setRoles] = useState([])
  const [selectedRoleName,setSelectedRoleName] = useState("admin")   //状态值，是头部的角色人员
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("http://127.0.0.1:9000/roles")
      console.log(data)
      await setData(data) //异步的
      await setIsLoading(false)
    }
    fetchData();
  },[])
  let getMenus = async (id,name) => {   //用于获取单个角色的权限
    let {data} = await axios.get(`http://127.0.0.1:9000/roles?id=${id}`)  //分配的权限
    console.log(typeof data[0].menu)
    //勾选后的menu 是string 需要转成 json
    typeof data[0].menu==="string"?await setStates({selectedKeys:JSON.parse(data[0].menu)}):await setStates({selectedKeys:data[0].menu})
    await setSelectedRoleName(name)
    await setIsLoading(false)
  }
  let ajaxRole = async () => {
    setIsLoading(true)
    const {data} = await axios.get("http://127.0.0.1:9000/roles")
    console.log(data)
    await setData(data) //异步的
    await setIsLoading(false)
  }
  let onChange = ( selectedRowKeys, selectedRows ) => {
    console.log(selectedRowKeys,selectedRows)
    setStates({selectedKeys:selectedRowKeys})
  }
  return (
    <Spin spinning={isLoading}>
      <RoleHead selectedRoleName = {selectedRoleName} ajaxRole={ajaxRole} setIsLoading={setIsLoading} data={data} states={states}></RoleHead>
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