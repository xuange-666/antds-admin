import React from 'react';
import { Helmet } from 'react-helmet'
import Banner from '../component/banner';
import {Input, Button, Form} from 'antd';
import { useState,useEffect } from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import axios from 'axios';
import qs from 'qs';
import './login.less';
function Login(props){
    console.log(props)
    function submit(values){
        console.log("success");
        console.log(values)
        let {userName,password} = values
        axios.post('http://localhost:9000/login',qs.stringify({userName,password}))
        .then(function(response){
            console.log(response);
            window.localStorage.setItem("TOKEN",JSON.stringify(values))
            window.location.href="http://localhost:3000/"
        })
        .catch(function(error){
            console.log(error);
        })
        //将values登录信息存储到本地
        // window.localStorage.setItem("loginstatus",JSON.stringify(values))
        //校验处理
        // window.location.href="http://localhost:3000/"
    }
    const [states,setStates] = useState({isMount:false,loading:false})
    useEffect(() => {
        setTimeout(() => setStates({...states,isMount:true}),300);
    },[])
    const formItemStyleName = states.isMount ? 'form-item active' : 'form-item';
    return(
        <div>
            <Helmet title="欢迎登陆"></Helmet>
            <div className="left">
                <Banner></Banner>
            </div>
            <div className="right">
                <div className="box">
                    <Form name="login" className="" onFinish={submit}>
                        <div className={formItemStyleName}>
                            <div className="header">欢迎登录</div>
                        </div>
                        <div className={formItemStyleName}>
                            <Form.Item name="userName" rules={[{required: true, message: '请输入用户名'}]}>
                                <Input allowClear prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                            </Form.Item>
                        </div>
                        <div className={formItemStyleName}>
                            <Form.Item name="password" rules={[{required: true, message: '请输入密码'}]}>
                                <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="密码"/>
                            </Form.Item>
                        </div>
                        <div className={formItemStyleName}>
                            <Form.Item shouldUpdate={true}>
                                {() => (
                                    <Button className="submit-btn" loading={states.loading} type="primary" htmlType="submit">
                                        登录
                                    </Button>
                                )}
                             </Form.Item>   
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Login;