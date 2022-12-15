package com.demo.Repositories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Entities.Area;
import com.demo.Entities.Doctor;
import com.demo.Entities.Login;

public interface DoctorRepository extends JpaRepository<Doctor,Integer> {

	@Query("select d from Doctor d where login_id= :id")
	Doctor getOneByLoginId(Login id);

	@Query("select d from Doctor d where area_id= :a")
	List<Doctor> getDoctorByArea(Area a);

	@Query("select DISTINCT(d.speciality) from Doctor d")
	List<Object> allDoctorsSpeciality();

	@Query("select d from Doctor d where area_id= :a and speciality= :spec")
	List<Doctor> allDoctorsAreaAndSpeciality(Area a, String spec);
}
