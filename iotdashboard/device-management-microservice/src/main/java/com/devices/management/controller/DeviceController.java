package com.devices.management.controller;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devices.management.model.Gateway;
import com.devices.management.model.Node;
import com.devices.management.model.Sensor;
import com.devices.management.services.DeviceService;

@RestController
@RequestMapping("/services")
public class DeviceController {

    @Autowired
    private Environment env;

    @Autowired
    private DeviceService deviceService;

    @GetMapping("/test")
    public String test() {
        return "working on " + env.getProperty("local.server.port");
    }

    @GetMapping("/nodes")
    public ResponseEntity<?> getAllNodes() {
        return ResponseEntity.ok(deviceService.getAllNodes());
    }

    @GetMapping("/sensors")
    public ResponseEntity<?> getAllSensors() {
        return ResponseEntity.ok(deviceService.getAllSensors());
    }

    @GetMapping("/gateways")
    public ResponseEntity<?> getAllGateway() {
        return ResponseEntity.ok(deviceService.getAllGateways());
    }

    @GetMapping("/gateways/{id}/nodes")
    public ResponseEntity<?> getAllNodes(@PathVariable String id) {
        return ResponseEntity.ok(deviceService.getAllNodes(id));
    }

    @GetMapping("/nodes/{idNode}/sensors")
    public ResponseEntity<?> getAllSensors(@PathVariable String idNode) {
        return ResponseEntity.ok(deviceService.getAllSensors(idNode));
    }

    @GetMapping("/gateways/{idGateway}")
    public ResponseEntity<?> getGateway(@PathVariable String idGateway) {
        return ResponseEntity.ok(deviceService.getGateway(idGateway));
    }

    @GetMapping("/nodes/{idNode}")
    public ResponseEntity<?> getNode(@PathVariable String idNode) {
        return ResponseEntity.ok(deviceService.getNode(idNode));
    }

    @GetMapping("/sensors/{idSensor}")
    public ResponseEntity<?> getSensor(@PathVariable String idSensor) {
        return ResponseEntity.ok(deviceService.getSensor(idSensor));
    }

    @PostMapping("/gateways")
    public ResponseEntity<?> addGateway(@RequestBody Gateway gateway) {
        Gateway postGateway = new Gateway(new ObjectId(), gateway.getTypeGateway(), gateway.getIpAddress(),
                gateway.getInstallDate(), gateway.getStatus());
        return ResponseEntity.ok(deviceService.createGateway(postGateway));
    }

    @PostMapping("/nodes")
    public ResponseEntity<?> addNode(@RequestBody Node node) {
        Node postNode = new Node(new ObjectId(), node.getAddress(), new ObjectId(node.getIdGateway()), node.getNameNode(),
                node.getManufacturer(), node.getType(), node.getMemoryCapacity(), node.getCalculationCapacity(),
                node.getRisidualEnergy());
        Gateway gateway = deviceService.getGateway(postNode.getIdGateway());
        List<Node> nodes = gateway.getNodes();
        if (nodes == null)
            nodes = new ArrayList<Node>();
        nodes.add(postNode);
        System.out.println(nodes);
        gateway.setNodes(nodes);
        deviceService.createGateway(gateway);

        return ResponseEntity.ok(deviceService.createNode(postNode));
    }

    @PostMapping("/sensors")
    public ResponseEntity<?> addSensor(@RequestBody Sensor sensor) {
        Sensor postSensor = new Sensor(new ObjectId(), sensor.getPort(), new ObjectId(sensor.getIdNode()), sensor.getMacAddress(),
                sensor.getTypeSensor(), sensor.getErrorRate(), sensor.getInstallDate(), sensor.getStatus());
        Node node = deviceService.getNode(sensor.getIdNode());
        System.out.println("Node :" + node);
        List<Sensor> sensors = node.getSensors();
        if (sensors == null)
            sensors = new ArrayList<Sensor>();
        sensors.add(postSensor);
        System.out.println(sensors);
        node.setSensors(sensors);
        deviceService.createNode(node);

        return ResponseEntity.ok(deviceService.createSensor(postSensor));
    }

    @PutMapping("/gateways/{idGateway}")
    public ResponseEntity<?> updateGateway(@RequestBody Gateway gateway, @PathVariable String idGateway) {
        Gateway updatedGateway = deviceService.getGateway(idGateway);
        gateway.setId(idGateway);
        updatedGateway = gateway;
        return ResponseEntity.ok(deviceService.createGateway(updatedGateway));
    }

    @PutMapping("/nodes/{idNode}")
    public ResponseEntity<?> updateNode(@RequestBody Node node, @PathVariable String idNode) {
        Node updatedNode = deviceService.getNode(idNode);
        node.setId(idNode);
        updatedNode = node;
        return ResponseEntity.ok(deviceService.createNode(updatedNode));

    }

    @PutMapping("/sensors/{idSensor}")
    public ResponseEntity<?> updateSensor(@RequestBody Sensor sensor, @PathVariable String idSensor) {
        Sensor updatedSensor = deviceService.getSensor(idSensor);
        sensor.setId(idSensor);
        updatedSensor = sensor;
        return ResponseEntity.ok(deviceService.createSensor(updatedSensor));

    }

    @DeleteMapping("/gateways/{idGateway}")
    public ResponseEntity<?> deleteGateway(@PathVariable String idGateway) {
        return ResponseEntity.ok(deviceService.deleteGateway(idGateway));
    }

    @DeleteMapping("/nodes/{idNode}")
    public ResponseEntity<?> deleteNode(@PathVariable String idNode) {
        return ResponseEntity.ok(deviceService.deleteNode(idNode));
    }

    @DeleteMapping("/sensors/{id}")
    public ResponseEntity<?> deleteSensor(@PathVariable String id) {
        return ResponseEntity.ok(deviceService.deleteSensor(id));

    }

}
