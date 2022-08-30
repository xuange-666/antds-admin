import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
//-----------------------------------
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import routes from "../routes/routes";
import { renderRoutes,matchRoutes } from 'react-router-config';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    HomeOutlined,
    AntDesignOutlined
  } from '@ant-design/icons';
import './home.less';
import logo from '../component/banner/logo.png';
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;
function Home(props){
    console.log(props)
    let arr = matchRoutes(routes,props.location.pathname)
    const [states,setStates] = useState({
        collapsed: false,
        h1:null
    })
    //处理tabs
    const panes = [];
    const [tabsstate,setTabsstate] = useState({
        activeKey: 0,
        panes
    })
    //修改激活状态
    let onChange = activeKey => {
        setTabsstate({...tabsstate,activeKey})
        let pathname = ""
        switch (activeKey) {
            case "1":
                pathname = "/home/first"
                break;
            case "2":
                pathname = "/home/users"
                break;
            case "3":
                pathname = "/home/roles"
                break;
            default:
                pathname = "/home/first"
                break;
        }
        props.history.push(pathname)
    };
    //增加tab
    let add = ({item,key}) => {
        console.log(item,key)
        const {panes} = tabsstate;
        let activeItem = panes.find((item,i) => {
            return item.key === key;
        })
        const activeKey = key;  //唯一的
        if(!activeItem){
            //给tab添加title
            let title = ""
            switch (activeKey) {
                case "1":
                    title="首页";
                    break;
                case "2":
                    title="用户管理";
                    break;
                case "3":
                    title="角色管理";
                    break;
                default:
                    title="New";
                    break;
            }
            panes.push({title, content: 'New Tab Pane', key: activeKey});
        }
        setTabsstate({panes,activeKey});
        // if(activeItem){
        //     const activeKey = key;
        //     setTabsstate({panes,activeKey});
        // }else{
        //     const activeKey = key;
        //     panes.push({title: 'New Tab', content: 'New Tab Pane', key: activeKey});
        //     setTabsstate({panes,activeKey});
        // }
    };
    //删除tab
    let remove = (targetKey) => {
        let {activeKey} = tabsstate;
        let lastIndex;
        if(activeKey==="1") return; //保证首页是不会删除的
        tabsstate.panes.forEach((pane, i) => {
            if(pane.key === targetKey){
                lastIndex = i - 1;
            }
        });
        const panes = tabsstate.panes.filter(pane => pane.key !== targetKey)
        if(panes.length && activeKey === targetKey){
            if(lastIndex >= 0){
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        setTabsstate({panes,activeKey});
    };
    let onEdit = (targetKey, action) => {
        console.log(targetKey,action)
        remove(targetKey)
    };
    let toggle = () => {
        setStates({
            collapsed: !states.collapsed,
        });
        console.log(states.h1)
        states.collapsed?states.h1.style.display="block":states.h1.style.display = "none"
    };
    return(
        <>
            <Helmet title='首页'/>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={states.collapsed}>
                    <div className="logo1">
                        <img src={logo}></img>
                        <h1 ref={(h1) => {states.h1 = h1}}>React Admin</h1>
                    </div>
                    <Menu theme="" mode="inline" defaultSelectedKeys={['1']} onClick={add}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link to="/home/first">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            <Link to="/home/users">用户管理</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            <Link to="/home/roles">角色管理</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0,background:'#2f54eb'}}>
                {React.createElement(states.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: toggle,
                })}
                <Breadcrumb>
                    <Breadcrumb.Item href="" className='home'>
                        <HomeOutlined />
                        <span>首页</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="" className='ant'>
                        <AntDesignOutlined />
                        <span>Ant Design官网</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                </Header>
                <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
                >
                <Tabs hideAdd onChange={onChange} activeKey={tabsstate.activeKey} type="editable-card" onEdit={onEdit}>
                    {tabsstate.panes.map((pane) => (
                    <TabPane tab={pane.title} key={pane.key}>
                        {renderRoutes(arr[0].route.routes)}
                    </TabPane>
                    ))}
                </Tabs>
                </Content>
            </Layout>
            </Layout>
        </>
    )
}
export default Home;