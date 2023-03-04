package com.devices.management.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collation = "alarms")
public class Alarm {

	@Id
	@Field("_id")
    ObjectId idAlarm;

	String message;

}
