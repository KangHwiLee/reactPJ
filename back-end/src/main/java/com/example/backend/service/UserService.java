package com.example.backend.service;

import com.example.backend.vo.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public User getUser(long id) {
        // 실제 데이터베이스에서 사용자 정보를 가져오는 로직
        // 이 예제에서는 간단하게 하드코딩으로 사용자 정보를 반환
        if (id == 1) {
            User user = User.builder()
                    .id(1)
                    .name("John Doe")
                            .build();
            return user;
        }
        return null;
    }
}