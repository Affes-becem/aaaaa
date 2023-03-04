package com.devices.management.services;

import java.util.List;

import com.devices.management.model.Measure;

public interface MeasureService {
	
	public List<Measure> getAllMeasures();
	public Measure getMeasure(); 

}
