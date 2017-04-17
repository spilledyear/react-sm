package com.hand.xzy.service.impl;

import com.hand.xzy.dto.User;
import com.hand.xzy.mapper.UserMapper;
import com.hand.xzy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by spilledyear on 2017/4/16.
 */
@Service("UserService")
public class UserServiceImpl implements UserService{
    @Autowired
    UserMapper userMapper;

    @Override
    public List<User> getUsers() {
        return userMapper.getUsers();
    }
}
