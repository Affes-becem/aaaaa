package com.devices.management.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;

@Data
@Document(collection = "gateway")
public class Gateway {
	@Id
	@Field("_id")
	private ObjectId id;

	private String typeGateway;

	private String ipAddress;

	private Date installDate;


	private Status status;

	@DBRef
	private List<Node> nodes;

	public String getId() {
		return this.id.toHexString();
	}

	public void setId(String id) {
		this.id = new ObjectId(id);
	}

	public Gateway(ObjectId id, String typeGateway, String ipAddress, Date installDate, Status status) {
		super();
		this.id = id;
		this.typeGateway = typeGateway;
		this.ipAddress = ipAddress;
		this.installDate = installDate;
		this.status = status;
	}

	
	
}
