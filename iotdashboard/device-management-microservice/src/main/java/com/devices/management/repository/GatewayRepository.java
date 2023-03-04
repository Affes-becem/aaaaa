package com.devices.management.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.devices.management.model.Gateway;

public interface GatewayRepository extends MongoRepository<Gateway, String> {

}
