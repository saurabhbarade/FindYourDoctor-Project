package com.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Entities.Area;
import com.demo.Entities.City;
import com.demo.Services.AreaService;
import com.demo.Services.CityService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AreaController {

	@Autowired
	CityService cservice;
	
	@Autowired
	AreaService aservice;
	
	@PostMapping("/savearea")
	public Area saveArea(@RequestBody Area a) {
		return aservice.saveArea(a);
	}
	
	@GetMapping("/allareas")
	public List<Area> getAllArea(){
		return aservice.allAreas();
	}
	
	@GetMapping("/areabyid/{id}")
	public Area getAreaById(@PathVariable int id) {
		return aservice.getAreaById(id);
	}
	
	@GetMapping("/areabycity/{id}")
	public List<Area> getAreaByCity(@PathVariable int id){
		City c= cservice.getCityById(id);
		return aservice.getAreaByCityId(c);
	}
}
