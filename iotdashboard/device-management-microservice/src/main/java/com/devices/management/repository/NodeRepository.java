package com.devices.management.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.devices.management.model.Node;

public interface NodeRepository extends MongoRepository<Node, String> {

	List<Node> findAllByIdGateway(String idGateway);
}
