package com.demo.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Entities.City;
import com.demo.Entities.State;
import com.demo.Services.CityService;
import com.demo.Services.StateService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CityController {

	@Autowired
	StateService sservice;
	
	@Autowired
	CityService cservice;
	
	@PostMapping("/savecity")
	public City saveCity(@RequestBody City c) {
		return cservice.saveCity(c);
	}
	
	@GetMapping("/allcities")
	public List<City> getAllCity(){
		return cservice.allcities();
	}
	
	@GetMapping("/getcitybyid/{id}")
	public City getCityById(@PathVariable int id) {
		return cservice.getCityById(id);
	}
	
	@GetMapping("/getcitybystate/{id}")
	public List<City> getCityByStateId(@PathVariable int id){
		State s=sservice.getById(id);
		return cservice.getCityByStateId(s);
	}
}
