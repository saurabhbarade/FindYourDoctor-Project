package com.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Entities.Area;
import com.demo.Entities.Doctor;
import com.demo.Entities.Login;
import com.demo.Repositories.DoctorRepository;

@Service
public class DoctorService {
	@Autowired
	DoctorRepository drepo;
	
	public Doctor getOneByLoginId(Login id) {
		return drepo.getOneByLoginId(id);
	}
	public Doctor saveDoctor(Doctor d) {
		Doctor dd = drepo.save(d);
			if(dd != null) {
			/*SimpleMailMessage smm = new SimpleMailMessage();
			smm.setFrom("baradesaurabh@gmail.com");
			smm.setTo(d.getLogin_id().getUser_name());
			System.out.println("--**$$"+d.getLogin_id().getUser_name());
			smm.setSubject("Registration Mail");
			Date day = new Date();
			smm.setText("Registration Successful "+day);
			jms.send(smm);*/
			return dd;
		}
		else {
			return null;
		}
	}
	public Doctor updateDoctor(Doctor dr) {
		// TODO Auto-generated method stub
		try {
			return drepo.save(dr);
		}
		catch(Exception e) {
			return null;
		}
	}
	public List<Doctor> allDoctors() {
		// TODO Auto-generated method stub
		return drepo.findAll();
	}
	public Optional<Doctor> getOneDoctor(int id) {
		// TODO Auto-generated method stub
		return drepo.findById(id);
	}
	public List<Doctor> allDoctorsByArea(Area a) {
		// TODO Auto-generated method stub
		return drepo.getDoctorByArea(a);
	}
	public List<Object> allDoctorsSpeciality() {
		// TODO Auto-generated method stub
		return drepo.allDoctorsSpeciality();
	}
	public List<Doctor> allDoctorsAreaAndSpeciality(Area a, String spec) {
		// TODO Auto-generated method stub
		return drepo.allDoctorsAreaAndSpeciality(a,spec);
	}
	public Doctor getOneById(int id) {
		return drepo.findById(id).get();
	}
}
