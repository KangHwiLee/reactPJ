package com.example.backend.service;

import org.json.simple.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

@Service
public class ContentService {

    public JSONObject img_upload(Object imgList, Long id){
        JSONObject img_arr = new JSONObject();
        if (imgList instanceof List) {
            // List로 형변환
            List<String> stringArray = (List<String>) imgList;
            int index = 1;
            // List 데이터 사용
            for (String item : stringArray) {
                // 각 항목에 대한 작업 수행
                try {
                    // Base64 데이터 URL을 디코드하여 이진 이미지 데이터로 변환
                    String base64Image = item.split(",")[1];
                    byte[] imageBytes = Base64.getMimeDecoder().decode(base64Image);

                    // 이미지를 저장할 디렉토리 설정
                    String uploadDirectory = "/var/webapps/upload/react/"+id;
                    System.out.println("upload 경로 : " + uploadDirectory);
                    // 디렉토리가 없으면 생성
                    Path directoryPath = Paths.get(uploadDirectory);
                    if (!Files.exists(directoryPath)) {
                        Files.createDirectories(directoryPath);
                    }

                    // 이미지 파일을 저장
                    String uuid = UUID.randomUUID().toString() + "_";
                    String filename = uuid + ".png"; // 이미지 파일명
                    Path filePath = Paths.get(uploadDirectory, filename);
                    Files.write(filePath, imageBytes);
                    img_arr.put(index, id+"/"+filename);
                    index++;
                } catch (IOException e) {
                    System.out.println(e);
                }
            }
        }
        return img_arr;
    }

}
