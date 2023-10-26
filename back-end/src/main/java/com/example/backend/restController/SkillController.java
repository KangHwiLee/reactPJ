package com.example.backend.restController;

import com.example.backend.entity.Content;
import com.example.backend.entity.Skill;
import com.example.backend.repository.SkillRepository;
import com.sun.management.OperatingSystemMXBean;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.lang.management.ManagementFactory;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SkillController {

    private final SkillRepository skillRepository;

    @GetMapping("/skill/paging")
    public HashMap<String, Object> content_paging(@PageableDefault(size=7, sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
        Page<Skill> pages = skillRepository.findAll(pageable);

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

    @GetMapping("/skill/title/{id}")
    public Skill skill_title(@PathVariable long id){

        return skillRepository.findById(id).orElseThrow(NullPointerException::new);
    }

    @PostMapping("/chart/data")
    public int chart_data(){
        OperatingSystemMXBean osBean = ManagementFactory.getPlatformMXBean(OperatingSystemMXBean.class);
        double cpuUsage = osBean.getSystemCpuLoad() * 100;
        return (int)cpuUsage;
    }

}
