package com.example.backend.restController;

import com.example.backend.entity.Content;
import com.example.backend.repository.ContentRepository;
import com.example.backend.service.ContentService;
import jdk.jfr.Event;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class BoardController {

    private final ContentRepository contentRepository;
    private final ContentService contentService;

    @PostMapping("/content/write")
    public ResponseEntity<Event> content_write(@RequestBody HashMap<String, Object> map) {
        String title = (String)map.get("title");
        String contentValue = (String)map.get("content");
        Object imgList = map.get("img");
        Long id = contentRepository.findByLastId();
        JSONObject img_arr = contentService.img_upload(imgList, id+1);

        Content content = new Content();
        content.setTitle(title);
        content.setContent(contentValue);
        content.setImg_json(img_arr.toString());
        content.setCategory((int) map.get("category"));
        contentRepository.save(content);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/content/update")
    public ResponseEntity content_update(@RequestBody HashMap<String, Object> map) throws IOException {
        String title = (String)map.get("title");
        String s_id = (String)map.get("id");
        long id = Long.parseLong(s_id);
        Object img = map.get("img_arr");
        Object delImg = map.get("del_img");
        String contentValue = (String)map.get("content");
        JSONObject img_arr = new JSONObject();

        // 이미지를 저장할 디렉토리 설정
        String uploadDirectory = "/var/webapps/upload/react/"+id;
        File folder = new File(uploadDirectory);
        if (img instanceof List) {
            // List로 형변환
            List<String> stringArray = (List<String>) img;
            int index = 1;
            // List 데이터 사용
            for (String item : stringArray) {
                if(item.length() > 1000){
                    String base64Image = item.split(",")[1];
                    byte[] imageBytes = Base64.getMimeDecoder().decode(base64Image);
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
                }else{
                    System.out.println("??");
                    img_arr.put(index, item.replace("http://localhost:3000/upload/", ""));
                    index++;
                }
            }
        }

        if (delImg instanceof List) {
            List<String> stringArray = (List<String>) delImg;
            if(stringArray.size() > 0){
            for (String item : stringArray) {
                File[] folder_list = folder.listFiles();
                item = item.replace("http://localhost:3000/upload/"+id+"/", "");
                for (int i = 0; i < folder_list.length; i++) {
                    if(folder_list[i].getName().equals(item)){
                    folder_list[i].delete(); //파일 삭제
                    }
                }
            }
            }
        }

        Content content = contentRepository.findById(id).orElse(null);
        content.setTitle(title);
        content.setContent(contentValue);
        content.setImg_json(img_arr.toString());
        content.setCategory((int) map.get("category"));
        contentRepository.save(content);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/content/paging")
    public HashMap<String, Object> content_paging(@PageableDefault(size=7, sort = "id", direction = Sort.Direction.DESC) Pageable pageable,
                                                  @RequestParam(defaultValue = "0") int category){
        Page<Content> pages;
        if (category == 0 || category == 1)
            pages = contentRepository.findAll(pageable);
        else{
            pages = contentRepository.findByCategory(category, pageable);
        }

        int endPage = (int)Math.ceil(((double)pages.getPageable().getPageNumber()+1)/5) *5;
        int startPage = endPage-4;
        int realEndPage = pages.getTotalPages();
        boolean prev = startPage > 1;
        boolean next = endPage < realEndPage;
        endPage = Math.min(realEndPage, endPage);
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

    @GetMapping("/content/update/{id}")
    public Content content_update(@PathVariable long id){
        Content content = contentRepository.findById(id).orElseThrow(NullPointerException::new);
        return content;
    }

    @DeleteMapping("/content/delete/{id}")
    public ResponseEntity contentDelete(@PathVariable long id){
        contentRepository.deleteById(id);
        String uploadDirectory = "/var/webapps/upload/react/"+id;
        File folder = new File(uploadDirectory);
        try {
            if (folder.exists()) {
                FileUtils.cleanDirectory(folder);//하위 폴더와 파일 모두 삭제

                if (folder.isDirectory()) {
                    folder.delete(); // 대상폴더 삭제
                    log.info("폴더 삭제");
                }
            }
        } catch (IOException e) {
            log.error("에러", e);
        }
        return ResponseEntity.ok().build();
    }


}
