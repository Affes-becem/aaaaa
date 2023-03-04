package com.devices.management.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.devices.management.model.Measure;

public interface MeasureRepository extends MongoRepository<Measure, String> {

}
