package com.devices.management.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@Document(collection = "measures")
public class Measure {

	@Id
	@Field("_id")
	private ObjectId idMeasure;
	private Date timeStamp;
	private String unit;
	private double threshold;
	private String measuringElement;
	private double scale;
	private double value;
	private double accuracy;
}
