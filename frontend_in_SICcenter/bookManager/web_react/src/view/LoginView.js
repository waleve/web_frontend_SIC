import React from 'react';
import LoginForm from "../components/LoginForm";
import '../css/login.css'




export function LoginView (){
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">Login</h1>
                        <div className="login-content">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        );
}




/*
    迭代1的版本
 */
// class LoginView extends React.Component{
//     render(){
//         return(
//             <div className="login-page">
//                 <div className="login-container">
//                     <div className="login-box">
//                         <h1 className="page-title">Login</h1>
//                         <div className="login-content">
//                             <LoginForm />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default LoginView;
