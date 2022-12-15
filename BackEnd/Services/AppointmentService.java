package com.demo.Services;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.demo.Entities.Appointment;
import com.demo.Entities.Doctor;
import com.demo.Entities.Nurse;
import com.demo.Entities.Patient;
import com.demo.Repositories.AppointmentRepository;

@Service
public class AppointmentService {

	@Autowired
	AppointmentRepository arepo;
	
	@Autowired
	JavaMailSender jms;
	
	public Appointment saveAppointment(Appointment a) {
		Appointment aa=arepo.save(a);
		if(aa!=null) {
			/*
			 * SimpleMailMessage smm = new SimpleMailMessage();
			 * smm.setFrom("connecttoyourdoctor@gmail.com");
			 * smm.setTo(aa.getPatientId().getLogin_id().getUser_name(),aa.getDoctorId().
			 * getLogin_id().getUser_name());
			 * //System.out.println("%%**"+aa.getPatientId().getLogin_id().getUser_name()+
			 * "\n@@$$"+aa.getDoctorId().getLogin_id().getUser_name());
			 * smm.setSubject("Appointment Booking");
			 * smm.setText("Appointment Booked Successfully"+"\nAppointment Date & Time : "
			 * +aa.getAppointmentDate()+" "+
			 * aa.getAppointmentTime()+"\nDoctor Details : \nDoctor Name :" +
			 * aa.getDoctorId().getFirstName()+" "+aa.getDoctorId().getLastName()+
			 * " (Speciality : "+aa.getDoctorId().getSpeciality()
			 * +")\nPatient Details : \nPatient Name : "+aa.getPatientId().getFirstName()
			 * +" "+aa.getPatientId().getLastName()
			 * +" (Mobile Number : "+aa.getPatientId().getMobileNumber()+")\nLocation : "+aa
			 * .getDoctorId().getArea_id().getAreaName()+" "+
			 * aa.getDoctorId().getArea_id().getCity_id().getCityName()+" "+aa.getDoctorId()
			 * .getArea_id().getCity_id().getState_id().getStateName()); jms.send(smm);
			 */
			return aa;
		}
		else {
			return null;
		}
	}

	public Appointment cancelAppointment(Appointment a) {
		Appointment aa = arepo.save(a);
		if(aa != null) {
			/*
			 * SimpleMailMessage smm = new SimpleMailMessage();
			 * smm.setFrom("connecttoyourdoctor@gmail.com");
			 * smm.setTo(aa.getPatientId().getLogin_id().getUser_name(),aa.getDoctorId().
			 * getLogin_id().getUser_name()); smm.setSubject("Appointment Cancelled");
			 * smm.setText("Appointment Cancelled \nCancelled By : "+aa.getCancelledBy()
			 * +"\nAppointment Date & Time : "+aa.getAppointmentDate()+" "+
			 * aa.getAppointmentTime()+"\nDoctor Details : \nDoctor Name :" +
			 * aa.getDoctorId().getFirstName()+" "+aa.getDoctorId().getLastName()+
			 * " (Speciality : "+aa.getDoctorId().getSpeciality()
			 * +")\nPatient Details : \nPatient Name : "+aa.getPatientId().getFirstName()
			 * +" "+aa.getPatientId().getLastName()
			 * +" (Mobile Number : "+aa.getPatientId().getMobileNumber()+")\nLocation : "+aa
			 * .getDoctorId().getArea_id().getAreaName()+" "+
			 * aa.getDoctorId().getArea_id().getCity_id().getCityName()+" "+aa.getDoctorId()
			 * .getArea_id().getCity_id().getState_id().getStateName()); jms.send(smm);
			 */
			return aa;
		}
		else {
			return null;
		}
	}

	public List<Appointment> getAllAppointment() {
		return arepo.findAll();
	}

	public List<Appointment> getAppointmentByDid(Doctor d, Date date1) {
		return arepo.getAppointmentByDid(d, date1);
	}

	public List<Appointment> getAppointmentHistoryByDid(Doctor d, Date date1) {
		// TODO Auto-generated method stub
		return arepo.getAppointmentHistoryByDid(d, date1);
	}

	public List<Appointment> getAppointmentHistoryByPid(Patient p, Date date1) {
		// TODO Auto-generated method stub
		return arepo.getAppointmentHistoryByPid(p,date1);
	}

	public List<Appointment> getAppointmentByPatient(Patient p, Date date1) {
		// TODO Auto-generated method stub
		return arepo.getAppointmentByPatient(p,date1);
	}
	public List<Object> getAppointmentByDidandDate(Doctor d, Date date) {
		// TODO Auto-generated method stub
		return arepo.getAppointmentByDidandDate(d,date);
	}
	
	
}
