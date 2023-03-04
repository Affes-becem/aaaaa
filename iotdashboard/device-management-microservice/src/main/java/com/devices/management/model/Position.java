package com.devices.management.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "positions")
public class Position {
	
	@Id
	@Field("_id")
	private ObjectId idPosition;
	
	private double latitude;
	private double longitude;
	private double attitude;
	private String zone;
	
	
	
	
	

	
	
	
}
