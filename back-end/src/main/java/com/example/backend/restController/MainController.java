package com.example.backend.restController;

import com.example.backend.entity.Content;
import com.example.backend.repository.ContentRepository;
import jdk.jfr.Event;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.json.simple.JSONObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MainController {

    private final ContentRepository contentRepository;

    @GetMapping("/test")
    public String test(){
        System.out.println("test??");
        return "test";
    }

    @PostMapping("/content_write")
    public ResponseEntity<Event> content_write(@RequestBody HashMap<String, Object> map){
        String title = (String)map.get("title");
        Object objectValue = map.get("content");
        Object objectValue2 = map.get("img");
        JSONObject content_arr = new JSONObject();
        JSONObject img_arr = new JSONObject();
        if (objectValue instanceof List) {
            // List로 형변환
            int index = 1;
            List<String> stringArray = (List<String>) objectValue;

            // List 데이터 사용
            for (String item : stringArray) {
                // 각 항목에 대한 작업 수행
                content_arr.put(index, item);
                index ++;
            }
        }



        if (objectValue2 instanceof List) {
            // List로 형변환
            List<String> stringArray = (List<String>) objectValue2;
            int index = 1;
            // List 데이터 사용
            for (String item : stringArray) {
                // 각 항목에 대한 작업 수행
                try {
                    // Base64 데이터 URL을 디코드하여 이진 이미지 데이터로 변환
                    String base64Image = item.split(",")[1];
                    byte[] imageBytes = Base64.getMimeDecoder().decode(base64Image);

                    // 이미지를 저장할 디렉토리 설정
                    String uploadDirectory = "C:/var/webapps/upload/react";

                    // 디렉토리가 없으면 생성
                    Path directoryPath = Paths.get(uploadDirectory);
                    if (!Files.exists(directoryPath)) {
                        Files.createDirectories(directoryPath);
                    }

                    // 이미지 파일을 저장
                    String uuid = UUID.randomUUID().toString() + "_";
                    String filename = uuid+".png"; // 이미지 파일명
                    Path filePath = Paths.get(uploadDirectory, filename);
                    Files.write(filePath, imageBytes);
                    char quotes = '"';
                    img_arr.put(index, filename);
                    index ++;
                } catch (IOException e) {
                    System.out.println(e);
                    return ResponseEntity.badRequest().build();
                }
            }
        }

//        Content content = Content.builder()
//               .title(title)
//               .content(content_arr.toString())
//               .img_json(img_arr.toString())
//               .build();
        Content content = new Content();
        content.setTitle(title);
        content.setContent(content_arr.toString());
        content.setImg_json(img_arr.toString());
        contentRepository.save(content);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/content/paging")
    public HashMap<String, Object> content_paging(@PageableDefault(size=7, sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
        Page<Content> pages = contentRepository.findAll(pageable);
        int endPage = (int)Math.ceil(((double)pages.getPageable().getPageNumber()+1)/5) *5;
        int startPage = endPage-4;
        int realEndPage = pages.getTotalPages();
        boolean prev = startPage > 1;
        boolean next = endPage < realEndPage;
        endPage = Math.min(realEndPage, endPage);
        System.out.println(pages.getPageable());
        HashMap<String, Object> map = new HashMap<>();
        map.put("startPage", startPage);
        map.put("endPage", endPage);
        map.put("pages", pages);
        map.put("prev", prev);
        map.put("next", next);

        return map;
    }

    @GetMapping("/content/detail/{id}")
    public Content content_detail(@PathVariable long id){
        Content content = contentRepository.findById(id).orElseThrow(NullPointerException::new);
        return content;
    }

}
