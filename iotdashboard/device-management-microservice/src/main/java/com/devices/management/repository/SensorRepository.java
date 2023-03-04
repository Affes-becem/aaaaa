package com.devices.management.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.devices.management.model.Sensor;

public interface SensorRepository extends MongoRepository<Sensor, String> {

}
