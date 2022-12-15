package com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Entities.State;

public interface StateRepository extends JpaRepository<State,Integer> {
	
	@Query("select s from State s where stateId= :id")
	State getStateById(int id);
	

}
