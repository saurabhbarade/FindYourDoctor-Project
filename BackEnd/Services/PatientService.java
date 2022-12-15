package com.demo.Services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.demo.Entities.Login;
import com.demo.Entities.Patient;
import com.demo.Repositories.PatientRepository;

@Service
public class PatientService {
	@Autowired
	PatientRepository prepo;
	
	@Autowired
	JavaMailSender jms;
	
	public Patient savePatient (Patient p) {
		Patient pp=prepo.save(p);
		if(pp != null) {
			
			  SimpleMailMessage smm=new SimpleMailMessage();
			  smm.setFrom("findyourdoctor22@gmail.com");
			  smm.setTo(p.getLogin_id().getUser_name());
			  System.out.println("--**$$"+p.getLogin_id().getUser_name());
			  smm.setSubject("Registration Mail"); Date d=new Date();
			 smm.setText("Registration Successful"+d); 
			 jms.send(smm);
			 
			return pp;
		}
		else {
			return null;
		}
	}
	
	public List<Patient> getAllUsers(){
		
		return prepo.findAll();
		}
	
	public Optional<Patient> getOnePatient(int id){
		return prepo.findById(id);
	}
	public Patient updatePatient(Patient p) {
		// TODO Auto-generated method stub
		try {
			return prepo.save(p);
		} catch (Exception e) {
			// TODO: handle exception
			return null;
		}
	}
	
	public Patient getOneByLoginId(Login id) {
		System.out.println(id);
		return prepo.getOneByLoginId(id);
	}

	public Patient getOneById(int id) {
		// TODO Auto-generated method stub
		return prepo.findById(id).get();
	}
}
