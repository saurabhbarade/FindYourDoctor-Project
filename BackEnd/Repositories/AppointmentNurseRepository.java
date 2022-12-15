package com.demo.Repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;
import org.springframework.stereotype.Repository;

import com.demo.Entities.Appointment;
import com.demo.Entities.AppointmentNurse;
import com.demo.Entities.Nurse;
import com.demo.Entities.Patient;
@Repository
public interface AppointmentNurseRepository extends JpaRepository<AppointmentNurse,Integer> {
	
	
	@Query("select a from AppointmentNurse a where patient_id= :p and appointmentDate < :date1")
	List<AppointmentNurse> getAppointmentHistoryByPid(Patient p, Date date1);

	@Query("select a from AppointmentNurse a where patient_id= :p and status = 'scheduled' and appointmentDate >= :date1")
	List<AppointmentNurse> getAppointmentByPatient(Patient p, Date date1);
	

	@Query("select a.appointmentTime from AppointmentNurse a where a.nurse_id= :n and a.appointmentDate= :date")
	List<Object> getAppointmentByNidandDate(Nurse n, Date date);
	

	
	@Query("select a from AppointmentNurse a where nurse_id= :n and status = 'scheduled' and appointmentDate >= :date1")
	List<AppointmentNurse> getAppointmentByNid(Nurse n, Date date1);

	@Query("select a from AppointmentNurse a where nurse_id= :n and appointmentDate < :date1")
	List<AppointmentNurse> getAppointmentHistoryByNid(Nurse n, Date date1);
}