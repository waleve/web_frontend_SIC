import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';
import {Navigate} from "react-router-dom";


export const login = (data,history) => {

    const url = `http://localhost:8080/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            console.log("success");
            localStorage.setItem('user', JSON.stringify(data.data));
            // history.push({pathname:"/HomeView"});
            // window.history.push({pathname:"/HomeView"});
            // window.open("http://localhost:3000/HomeView");
            history("/HomeView");

            // 这样会使得无法返回
            // window.location.replace("http://localhost:3000/HomeView");


            message.success(data.msg);
            return <Navigate to='/HomeView' state={{from:window.location}}></Navigate>
        }
        else{
            console.log("fail");
            // history.push({pathname:"/HomeView"});
            // window.history.push("http://localhost:3000/HomeView");
            // window.open("http://localhost:3000/HomeView");
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = () => {
    const url = `http://localhost:8080/logout`;

    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.removeItem("user");
            history.push("/login");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = `http://localhost:8080/checkSession`;
    postRequest(url, {}, callback);
};

