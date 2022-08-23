import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
//-----------------------------------
import { Layout, Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
// import './home.less'
const { Header, Sider, Content } = Layout;
function Home(props){
    console.log(props)
    const [states,setStates] = useState({
        collapsed: false
    })
    useEffect(() => {

    })
    let toggle = () => {
        setStates({
            collapsed: !states.collapsed,
        });
    };
    return(
        <>
            <Helmet title='首页'/>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={states.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(states.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
                </Header>
                <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
                >
                Content
                </Content>
            </Layout>
            </Layout>
        </>
    )
}
export default Home;