package com.demo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Entities.Login;
import com.demo.Entities.Patient;
import com.demo.Entities.PatientRegistration;
import com.demo.Repositories.LoginRepository;
import com.demo.Repositories.PatientRepository;
import com.demo.Services.LoginService;
import com.demo.Services.PatientService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class PatientController {
	@Autowired
	PatientService pservice;
	
	@Autowired
	LoginService lservice;
	@Autowired
	LoginRepository loginrepo;
	
	
	
	@PostMapping("/savepatient")
	public Patient savePatient (@RequestBody PatientRegistration pr) {
		//Login l=new Login(pr.getUser_name(),pr.getPassword(),"Patient","active");
		Login present=loginrepo.loginCheck1(pr.getUser_name());
		if(present!=null) {return null;}
		else {
		Login l2=new Login(pr.getUser_name(),pr.getPassword(),"Patient","active");
		Login inserted=lservice.saveUser(l2);
		
		if(inserted==null) {
			return null;
		}
		else {
			Patient p=new Patient(pr.getFirst_name(),pr.getLast_name(),pr.getMobile_number(),pr.getGender(),pr.getBlood_group(),pr.getDob(),inserted);
			return pservice.savePatient(p);
		}}
	}
	@GetMapping("/allpatients")
	public List<Patient> getAllPatients(){
		return pservice.getAllUsers();
	}
	
	@GetMapping ("/getonepatient/{id}")
	public Optional<Patient> getOnePatient(@PathVariable int id){
		return pservice.getOnePatient(id);
	}

	@PostMapping("/updatepatient")
	public Patient updatePatient(@RequestBody Patient p) {
//		System.out.println(p.getPatient_id());
//		System.out.println(p.getFirstName());
//		System.out.println(p.getLastName());
//		System.out.println(p.getMobileNumber());
//		System.out.println(p.getDob());
//		System.out.println(p.getGender());
//		System.out.println(p.getBlood_group());
//		System.out.println(p.getLogin_id());
		return pservice.updatePatient(p);
	}
	
}
