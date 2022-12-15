package com.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Entities.City;
import com.demo.Entities.State;
import com.demo.Repositories.CityRepository;

@Service
public class CityService {
	@Autowired
	CityRepository crepo;
	
	public City saveCity(City c) {
		try{
			return crepo.save(c);
		}
		catch(Exception e) {
			return null;
		}
	}
	
	public List<City> allcities(){
		return crepo.findAll();
	}

	public City getCityById(int id) {
		// TODO Auto-generated method stub
		return crepo.findById(id).get();
	}

	public List<City> getCityByStateId(State s) {
		// TODO Auto-generated method stub
		return crepo.getCityByStateId(s);
	}
}
