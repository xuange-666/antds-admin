import { Menu } from "antd";
import { Link } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    HomeOutlined,
    AntDesignOutlined
  } from '@ant-design/icons';
function MyMenu(props) {
    //增加tab
let add = ({item,key}) => {
    console.log(item,key)
    const {panes} = props.tabsstate;
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
    props.setTabsstate({panes,activeKey});
    // if(activeItem){
    //     const activeKey = key;
    //     setTabsstate({panes,activeKey});
    // }else{
    //     const activeKey = key;
    //     panes.push({title: 'New Tab', content: 'New Tab Pane', key: activeKey});
    //     setTabsstate({panes,activeKey});
    // }
};
    return (
        <>
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
        </>
    )
}

export default MyMenu;