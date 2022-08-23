import React from 'react';
import { Helmet } from 'react-helmet'
import Banner from '../component/banner';
import {Input, Button, Form} from 'antd';
import { useState,useEffect } from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import './login.less';
function Login(){
    function submit(){
        console.log("success");
        //校验处理
        window.location.href="http://localhost:3000/"
    }
    const [states,setStates] = useState({isMount:false,loading:false})
    useEffect(() => {
        setTimeout(() => setStates({...states,isMount:true}),300);
    },[])
    const formItemStyleName = states.isMount ? 'form-item active' : 'form-item';
    return(
        <div>
            <Helmet title='欢迎登陆'></Helmet>
            <div className='left'>
                <Banner></Banner>
            </div>
            <div className='right'>
                <div className='box'>
                    <Form name='login' onFinish={submit}>
                        <div className={formItemStyleName}>
                            <div className='header'>欢迎登录</div>
                        </div>
                        <div className={formItemStyleName}>
                            <Form.Item name="userName" rules={[{required: true, message: '请输入用户名'}]}>
                                <Input allowClear prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名" className='input'/>
                            </Form.Item>
                        </div>
                        <div className={formItemStyleName}>
                            <Form.Item name="password" rules={[{required: true, message: '请输入密码'}]}>
                                <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="密码" className='input'/>
                            </Form.Item>
                        </div>
                        <div className={formItemStyleName}>
                            <Form.Item shouldUpdate={true}>
                                {() => (
                                    <Button className="submit-btn" loading={states.loading} htmlType="submit">
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