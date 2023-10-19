package com.example.backend.restController;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class MainController {

    @GetMapping("/test")
    public String test(){
        System.out.println("test??");
        return "test";
    }

    @PostMapping("/content_write")
    public String content_write(@RequestBody HashMap<String, Object> map){
        System.out.println(map);
        return "";
    }

}
