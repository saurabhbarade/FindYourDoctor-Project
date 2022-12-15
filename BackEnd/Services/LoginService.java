package com.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.demo.Entities.Doctor;
import com.demo.Entities.Login;
import com.demo.Entities.Nurse;
import com.demo.Entities.Patient;
import com.demo.Repositories.DoctorRepository;
import com.demo.Repositories.LoginRepository;
import com.demo.Repositories.NurseRepository;
import com.demo.Repositories.PatientRepository;
import java.util.Base64;  
@Service
public class LoginService {

	@Autowired
	LoginRepository loginrepo;
	
	@Autowired
	PatientRepository prepo;
	
	@Autowired
	DoctorRepository drepo;
	
	@Autowired
	NurseRepository nrepo;
	
	@Autowired
	JavaMailSender jms;
	
	public Login saveUser(Login l) {
		try {
			
			return loginrepo.save(l);
		}
		catch(Exception e){
			return null;
		}
	}
	
	public List<Login> getAllUsers(){
		return loginrepo.findAll();
	}

	public Login getUser(int id) {
		// TODO Auto-generated method stub
		return loginrepo.findById(id).get();
	}

	public Login updateUser(Login l) {
		// TODO Auto-generated method stub
		try{
			return loginrepo.save(l);
		}
		catch(Exception e) {
			return null;
		}
	}

	public Object loginCheck(String user_name, String password) {
		// TODO Auto-generated method stub
		Login l=loginrepo.loginCheck(user_name,password);
		
		if(l!=null && l.getStatus().equals("active")) {
			Patient p=null;
			Doctor d=null;
			Nurse n=null;
			
			if(l.getUser_type().equals("Patient")) {
				try {
					p=prepo.getOneByLoginId(l);
				}
				catch(Exception e) {
					p=null;
				}
				return p;
			}
			else if(l.getUser_type().equals("Doctor")) {
				try {
					d=drepo.getOneByLoginId(l);
				}
				catch(Exception e) {
					System.out.println(e.getMessage());
					d=null;
				}
				return d;
			}
			else if(l.getUser_type().equals("Nurse")) {
				try {
					n=nrepo.getOneByLoginId(l);
				}
				catch(Exception e) {
					System.out.println(e.getMessage());
					n=null;
				}
				return n;
			}
			else if(l.getUser_type().equals("Admin")) {
				return l;
			}
			else {
				return null;
			}
		}
		else {
			return null;
		}
	}

	public Login forgotPassword(String user_name) {
		Login l = loginrepo.forgotPassword(user_name);
		if(l != null) {
			SimpleMailMessage smm = new SimpleMailMessage();
			smm.setFrom("findyourdoctor22@gmail.com");
			smm.setTo(l.getUser_name());
			System.out.println(" "+l.getUser_name());
			smm.setSubject("Password for your account");
			smm.setText("Password for your account\nUsername : "+l.getUser_name()+"\nPassword : "+l.getPassword());
			jms.send(smm);
			return l;
		}
		else {
			return null;
	}
}
}
	
	

