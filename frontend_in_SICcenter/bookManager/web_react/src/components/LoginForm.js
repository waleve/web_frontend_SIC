import React from 'react';
import '../css/login.css'
import {Link} from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import Icon from "@ant-design/icons";
import * as userService from "../services/userService";
import {useNavigate} from "react-router";

export function LoginForm(){

    const navigate = useNavigate();
    const [form] = Form.useForm();

    const handleSubmit = e => {
        console.log("ready");

        console.log(e);
        if (e){
            userService.login(e,navigate);
        }
        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('Received values of form: ', values);
        //         userService.login(values);
        //     }
        // });
    };

        return (
            <Form form={form} className="login-form" onFinish={handleSubmit} >
                <Form.Item
                    name='username'
                >
                    <Input
                        // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name='password'
                >
                    <Input
                        // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
}
// class LoginForm extends React.Component {
//
//     forRef = React.createRef()
//
//     handleSubmit = e => {
//         console.log("ready");
//
//         console.log(e);
//         if (e){
//             userService.login(e);
//         }
//         // e.preventDefault();
//         // this.props.form.validateFields((err, values) => {
//         //     if (!err) {
//         //         console.log('Received values of form: ', values);
//         //         userService.login(values);
//         //     }
//         // });
//     };
//
//     render() {
//         return (
//             <Form ref={this.forRef} className="login-form" onFinish={this.handleSubmit} >
//                 <Form.Item
//                     name='username'
//                 >
//                         <Input
//                             // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                             placeholder="Username"
//                         />
//                 </Form.Item>
//                 <Form.Item
//                     name='password'
//                 >
//                         <Input
//                             // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                             type="password"
//                             placeholder="Password"
//                         />
//                 </Form.Item>
//                 <Form.Item>
//                     <Checkbox>Remember me</Checkbox>
//                     <a className="login-form-forgot" href="">
//                         Forgot password
//                     </a>
//                     <Button type="primary" htmlType="submit" className="login-form-button">
//                         Log in
//                     </Button>
//                     Or <a href="">register now!</a>
//                 </Form.Item>
//             </Form>
//         );
//     }
// }
export default LoginForm;