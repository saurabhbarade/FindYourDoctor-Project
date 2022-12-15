package com.demo.Services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Service;

import com.demo.Entities.Appointment;
import com.demo.Entities.AppointmentNurse;
import com.demo.Entities.Nurse;
import com.demo.Entities.Patient;
import com.demo.Repositories.AppointmentNurseRepository;



@Service
public class AppointmentNurseService {
    
	@Autowired
	AppointmentNurseRepository anrepo;
	
	
	public AppointmentNurse saveAppointment(AppointmentNurse a) {
		AppointmentNurse aa=anrepo.save(a);
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
	public AppointmentNurse cancelAppointment(AppointmentNurse a) {
		AppointmentNurse aa = anrepo.save(a);
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
	public List<AppointmentNurse> getAllAppointment() {
		return anrepo.findAll();
	}
	public List<AppointmentNurse> getAppointmentHistoryByPid(Patient p, Date date1) {
		// TODO Auto-generated method stub
		return anrepo.getAppointmentHistoryByPid(p,date1);
	}

	public List<AppointmentNurse> getAppointmentByPatient(Patient p, Date date1) {
		// TODO Auto-generated method stub
		return anrepo.getAppointmentByPatient(p,date1);
	}

	public List<Object> getAppointmentByNidandDate(Nurse n,Date date){

		return anrepo.getAppointmentByNidandDate(n,date);
		}

	public List<AppointmentNurse> getAppointmentByNid(Nurse n, Date date1) {
		// TODO Auto-generated method stub
		return anrepo.getAppointmentByNid(n, date1);
	}

	public List<AppointmentNurse> getAppointmentHistoryByNid(Nurse n, Date date1) {
		// TODO Auto-generated method stub
		return anrepo.getAppointmentHistoryByNid(n, date1);
	}

}