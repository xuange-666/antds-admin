import { Table,Layout,Spin } from 'antd';
import RoleHead from './RoleHead';
import RoleTable from './RoleTable';
import RoleTab from './RoleTab';
import { useState } from 'react';

const { Sider, Content } = Layout;

function Roles(){
  const [isLoading,setIsLoading] = useState(true)
  const [states,setStates] = useState({selectedKeys:['首页','文档']})  //所有被选中的row的key值 
  let t = setTimeout(async () => {
    if(isLoading){
      await setIsLoading(false)
      return
    }
    return
  },2000)
  let onChange = ( selectedRowKeys, selectedRows ) => {
    console.log(selectedRowKeys,selectedRows)
    setStates({selectedKeys:selectedRowKeys})
  }
  return (
    <Spin spinning={isLoading}>
      <Layout>
        <Sider width="60%">
          <RoleTable isLoading={isLoading} setIsLoading={setIsLoading}></RoleTable>
        </Sider>
        <Content style={{width:'30%'}}>
          <RoleTab states={states} onChange={onChange}></RoleTab>
        </Content>
      </Layout>
    </Spin>
  )
}
export default Roles