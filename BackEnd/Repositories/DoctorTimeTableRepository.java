package com.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.Entities.Doctor;
import com.demo.Entities.DoctorTimeTable;

@Repository
public interface DoctorTimeTableRepository extends JpaRepository<DoctorTimeTable, Integer> {
	
	@Query("select dtt from DoctorTimeTable dtt where doctor_id = :d")
	public List<DoctorTimeTable> getTimeTableByDoctorId(Doctor d);
	
	@Query("select dtt from DoctorTimeTable dtt where doctor_id = :d and weekday = :day")
	public DoctorTimeTable getAppointmentsByIdandDay(Doctor d, String day);

}
