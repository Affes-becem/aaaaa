package com.devices.management.model;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Document(collection = "nodes")
public class Node {
    @Id
    @Field("_id")
    private ObjectId id;

    private String address;

    private ObjectId idGateway;

    private String nameNode;

    private String manufacturer;

    private String type;

    private float memoryCapacity;

    private float calculationCapacity;

    private double risidualEnergy;

    @DBRef
    private List<Sensor> sensors;

    private Position position;

    public String getId() {
        return this.id.toHexString();
    }

    public void setId(String id) {
        this.id = new ObjectId(id);
    }

    public String getIdGateway() {
        return this.idGateway.toHexString();
    }

    public void setIdGateway(String idGateway) {
        this.id = new ObjectId(idGateway);
    }

    public Node(ObjectId id, String address, ObjectId idGateway, String nameNode, String manufacturer, String type,
                float memoryCapacity, float calculationCapacity, double risidualEnergy) {
        super();
        this.id = id;
        this.address = address;
        this.idGateway = idGateway;
        this.nameNode = nameNode;
        this.manufacturer = manufacturer;
        this.type = type;
        this.memoryCapacity = memoryCapacity;
        this.calculationCapacity = calculationCapacity;
        this.risidualEnergy = risidualEnergy;

    }

}
