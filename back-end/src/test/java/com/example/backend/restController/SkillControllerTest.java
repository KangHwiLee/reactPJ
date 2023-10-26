package com.example.backend.restController;

import com.sun.management.OperatingSystemMXBean;
import org.junit.jupiter.api.Test;

import java.lang.management.ManagementFactory;

import static org.junit.jupiter.api.Assertions.*;

class SkillControllerTest {

    @Test
    void content_paging() {
    }

    @Test
    void skill_title() {
    }

    @Test
    void chartData() {
        int count = 0;

        while (count < 10) {
            try {
                // 1초(1000밀리초) 동안 스레드 일시 정지
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            // 원하는 동작을 수행
            OperatingSystemMXBean osBean = ManagementFactory.getPlatformMXBean(OperatingSystemMXBean.class);
            double cpuUsage = osBean.getSystemCpuLoad() * 100;
            System.out.println(cpuUsage);

            count++;
        }

    }
}