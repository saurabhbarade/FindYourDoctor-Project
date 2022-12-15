package com.demo.Repositories;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.demo.Entities.Appointment;
import com.demo.Entities.Doctor;
import com.demo.Entities.Nurse;
import com.demo.Entities.Patient;

public interface AppointmentRepository extends JpaRepository<Appointment,Integer>{

	@Query("select a from Appointment a where doctor_id= :d and status = 'scheduled' and appointmentDate >= :date1")
	List<Appointment> getAppointmentByDid(Doctor d, Date date1);

	@Query("select a from Appointment a where doctor_id= :d and appointmentDate < :date1")
	List<Appointment> getAppointmentHistoryByDid(Doctor d, Date date1);

	@Query("select a from Appointment a where patient_id= :p and appointmentDate < :date1")
	List<Appointment> getAppointmentHistoryByPid(Patient p, Date date1);

	@Query("select a from Appointment a where patient_id= :p and status = 'scheduled' and appointmentDate >= :date1")
	List<Appointment> getAppointmentByPatient(Patient p, Date date1);
	

	
	
	@Query("select a.appointmentTime from Appointment a where doctor_id= :d and appointmentDate= :date")
	List<Object> getAppointmentByDidandDate(Doctor d, Date date);
	
	

}
