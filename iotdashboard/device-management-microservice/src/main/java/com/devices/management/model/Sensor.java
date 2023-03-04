package com.devices.management.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@Document(collection = "sensors")
public class Sensor {

    @Id
    @Field("_id")
    private ObjectId id;

    private ObjectId idNode;

    private int port;

    private String macAddress;

    private String typeSensor;

    private double errorRate;

    @DBRef
    private Alarm alarm;

    @DBRef
    private Measure measure;

    private Date installDate;

    private Status status;

    public String getId() {
        return id.toHexString();
    }

    public void setId(String id) {
        this.id = new ObjectId(id);
    }

    public String getIdNode() {
        return idNode.toHexString();
    }

    public void setIdNode(String idNode) {
        this.idNode = new ObjectId(idNode);
    }

    public Sensor(ObjectId id, int port, ObjectId idNode, String macAddress, String typeSensor, double errorRate,
                  Date installDate, Status status) {
        super();
        this.id = id;
        this.idNode = idNode;
        this.port = port;
        this.macAddress = macAddress;
        this.typeSensor = typeSensor;
        this.errorRate = errorRate;
        this.installDate = installDate;
        this.status = status;
    }

}
