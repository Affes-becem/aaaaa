package com.devices.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class DeviceManagementMicroserviceApplication {

    public static void main(String[] args) {

        SpringApplication.run(DeviceManagementMicroserviceApplication.class, args);

    }

}
