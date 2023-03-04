package com.devices.management.services;

import java.util.List;

import com.devices.management.model.Gateway;
import com.devices.management.model.Node;
import com.devices.management.model.Sensor;

public interface DeviceService {

	public List<Node> getAllNodes();

	public List<Node> getAllNodes(String idGateway);

	public Node getNode(String idNode);

	public Node createNode(Node node);

	public Node deleteNode(String idNode);

	public List<Sensor> getAllSensors();

	public List<Sensor> getAllSensors(String idNode);

	public Sensor getSensor(String idSensor);

	public Sensor createSensor(Sensor sensor);

	public Sensor deleteSensor(String idSensor);

	public List<Gateway> getAllGateways();

	public Gateway getGateway(String idGateway);

	public Gateway createGateway(Gateway gateway);

	public Gateway deleteGateway(String idGateway);

}
