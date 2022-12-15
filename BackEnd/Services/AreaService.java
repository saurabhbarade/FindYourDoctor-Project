package com.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Entities.Area;
import com.demo.Entities.City;
import com.demo.Repositories.AreaRepository;

@Service
public class AreaService {

	@Autowired
	AreaRepository arepo;
	
	public Area saveArea(Area a) {
		try {
			return arepo.save(a);
		}
		catch(Exception e) {
			return null;
		}
	}

	public List<Area> allAreas() {
		// TODO Auto-generated method stub
		return arepo.findAll();
	}

	public Area getAreaById(int id) {
		// TODO Auto-generated method stub
		try {
			return arepo.findById(id).get();
		}
		catch(Exception e){
			return null;
		}
	}

	public List<Area> getAreaByCityId(City c) {
		// TODO Auto-generated method stub
		try {
			return arepo.getAreaByCityId(c);
		}
		catch(Exception e) {
			return null;
		}
	}
}
