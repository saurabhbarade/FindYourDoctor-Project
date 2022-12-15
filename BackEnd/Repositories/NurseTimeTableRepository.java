package com.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.Entities.Nurse;
import com.demo.Entities.NurseTimeTable;

@Repository
public interface NurseTimeTableRepository extends JpaRepository<NurseTimeTable, Integer> {
	
	@Query("select ntt from NurseTimeTable ntt where nurse_id = :n")
	public List<NurseTimeTable> getTimeTableByNurseId(Nurse n);
	
	@Query("select ntt from NurseTimeTable ntt where nurse_id = :n and weekday = :day")
	public NurseTimeTable getAppointmentsByIdandDay(Nurse n, String day);

}
