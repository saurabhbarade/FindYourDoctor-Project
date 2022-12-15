package com.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Entities.Area;
import com.demo.Entities.City;

public interface AreaRepository extends JpaRepository<Area,Integer>{
	
	@Query("select a from Area a where city_id= :c")
	List<Area> getAreaByCityId(City c);

}
