import { Table,Layout } from 'antd';
import RoleHead from './RoleHead';
import RoleTable from './RoleTable';
import RoleTab from './RoleTab';

const { Sider, Content } = Layout;

function Roles(){
  return (
      <Layout>
        <Sider width="640">
          <RoleTable></RoleTable>
        </Sider>
        <Layout>
          <RoleTab></RoleTab>
        </Layout>
      </Layout>
  )
}
export default Roles