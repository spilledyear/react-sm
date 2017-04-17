package com.hand.xzy;

import com.hand.xzy.dto.User;
import com.hand.xzy.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


/**
 * @author spilledyear
 * @since 2017-03-30 18:22
 */
@SpringBootApplication
@Controller
public class Application {
    private static Logger LOG = LoggerFactory.getLogger(Application.class);

    @Autowired
    UserService userService;

    @RequestMapping("/")
    public String home(Model model) {
        return "index";
    }


    @RequestMapping(value="/getUsers")
    public @ResponseBody List<User> index() {
        List<User> users = userService.getUsers();
        System.out.println(users);
        return users;
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
        LOG.info("----------------- SpringBoot start success -----------------");
    }

}
