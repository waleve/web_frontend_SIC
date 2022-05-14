package com.example.backend.controllers;


import com.example.backend.constant.Constant;
import com.example.backend.entity.UserAuth;
import com.example.backend.service.UserService;
import com.example.backend.utils.msgutils.Msg;
import com.example.backend.utils.msgutils.MsgCode;
import com.example.backend.utils.msgutils.MsgUtil;
import com.example.backend.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class LoginControllers {
//它会实例化对象
    @Autowired
    private UserService userService;


    // 来处理login的http请求
    @RequestMapping("/login")
    public Msg login(@RequestBody Map<String,String> params){
        // 从body中获取param的值
        String username = params.get(Constant.USERNAME);
        String password = params.get(Constant.PASSWORD);
        System.out.println("Coming in");
        System.out.println(username);
        System.out.println(password);


        UserAuth auth = userService.checkUser(username, password);
        if(auth != null){
            // 说明存在这名用户
            //组装起json
            JSONObject obj = new JSONObject();
            obj.put(Constant.USER_ID, auth.getUserId());
            obj.put(Constant.USERNAME, auth.getUsername());
            obj.put(Constant.USER_TYPE, auth.getUserType());

            SessionUtil.setSession(obj);

            JSONObject data = JSONObject.fromObject(auth);
            data.remove(Constant.PASSWORD);

            // return会直接返回给前端，然后前端再负责解析
            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGIN_SUCCESS_MSG, data);
        }
        else{
            return MsgUtil.makeMsg(MsgCode.LOGIN_USER_ERROR);
        }

    }






}
