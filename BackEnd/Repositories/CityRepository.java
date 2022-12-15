package com.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Entities.City;
import com.demo.Entities.State;

public interface CityRepository extends JpaRepository<City,Integer> {
	
	@Query("select c from City c where state_id= :s")
	List<City> getCityByStateId(State s);

}
