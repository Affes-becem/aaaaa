package com.devices.management.services;

import java.util.ArrayList;
import java.util.List;

import com.devices.management.model.Sensor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devices.management.model.Gateway;
import com.devices.management.model.Node;
import com.devices.management.repository.GatewayRepository;
import com.devices.management.repository.NodeRepository;
import com.devices.management.repository.SensorRepository;

@Service
public class DeviceServiceImpl implements DeviceService {

    @Autowired
    private SensorRepository sensorRepository;

    @Autowired
    private NodeRepository nodeRepository;

    @Autowired
    private GatewayRepository gatewayRepository;

    @Override
    public Node createNode(Node node) {
        return nodeRepository.save(node);

    }

    @Override
    public Sensor createSensor(Sensor sensor) {

        return sensorRepository.save(sensor);

    }


    @Override
    public Gateway deleteGateway(String idGateway) {
        Gateway gateway = this.getGateway(idGateway);
        List<Node> nodes = gateway.getNodes();
        if (nodes != null) {
            for (Node node : nodes) {

                for (Sensor sensor : node.getSensors())
                    this.sensorRepository.delete(sensor);
                this.nodeRepository.delete(node);


            }
        }
        System.out.println(nodes);
        gatewayRepository.delete(gateway);
        return gateway;
    }

    @Override
    public Node deleteNode(String idNode) {
        Node node = this.getNode(idNode);
        List<Sensor> sensors = node.getSensors();
        if (sensors != null) {
            for (Sensor sensor : sensors) {
                this.sensorRepository.delete(sensor);

            }
        }
        System.out.println(sensors);
        this.nodeRepository.delete(node);
        return node;

    }

    @Override
    public Sensor deleteSensor(String id) {

        Sensor sensor = sensorRepository.findById(id).get();
        System.out.println("Sensor : " + sensor);

        sensorRepository.delete(sensor);
        return sensor;
    }

    @Override
    public List<Node> getAllNodes(String idGateway) {
        System.out.println(idGateway);
        List<Node> nodes = nodeRepository.findAll();
        List<Node> listNodes = new ArrayList<>();
        for (Node node : nodes) {

            if (idGateway.compareTo(node.getIdGateway()) == 0) {
                listNodes.add(node);

            }

        }

        return listNodes;
    }

    @Override
    public List<Sensor> getAllSensors(String idNode) {

        List<Sensor> sensors = sensorRepository.findAll();
        List<Sensor> listSensors = new ArrayList<Sensor>();
        for (Sensor sensor : sensors) {

            if (idNode.compareTo(sensor.getIdNode()) == 0) {
                listSensors.add(sensor);

            }

        }

        return sensors;
    }

    @Override
    public List<Node> getAllNodes() {
        return nodeRepository.findAll();
    }

    @Override
    public List<Sensor> getAllSensors() {

        return sensorRepository.findAll();
    }

    @Override
    public Node getNode(String idNode) {

        return nodeRepository.findById(idNode).get();
    }

    @Override
    public Sensor getSensor(String idSensor) {

        return sensorRepository.findById(idSensor).get();
    }

    @Override
    public List<Gateway> getAllGateways() {

        return gatewayRepository.findAll();

    }

    @Override
    public Gateway getGateway(String idGateway) {

        return gatewayRepository.findById(idGateway).get();
    }

    @Override
    public Gateway createGateway(Gateway gateway) {
        return gatewayRepository.save(gateway);
    }


}
