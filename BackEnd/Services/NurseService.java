 package com.demo.Services;

 
	


	import java.util.Date;
import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.demo.Entities.Appointment;
import com.demo.Entities.Area;
	import com.demo.Entities.Nurse;
	import com.demo.Entities.Login;
	import com.demo.Repositories.NurseRepository;

	@Service
	public class NurseService {
		@Autowired
		NurseRepository nrepo;
		
		public Nurse getOneByLoginId(Login id) {
			return nrepo.getOneByLoginId(id);
		}
		public Nurse saveNurse(Nurse n) {
			Nurse dd = nrepo.save(n);
				if(dd != null) {
				/*SimpleMailMessage smm = new SimpleMailMessage();
				smm.setFrom("baradesaurabh@gmail.com");
				smm.setTo(n.getLogin_id().getUser_name());
				System.out.println("--**$$"+n.getLogin_id().getUser_name());
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
		public Nurse updateNurse(Nurse nr) {
			// TODO Auto-generated method stub
			try {
				return nrepo.save(nr);
			}
			catch(Exception e) {
				return null;
			}
		}
		public List<Nurse> allNurses() {
			// TODO Auto-generated method stub
			return nrepo.findAll();
		}
		public Optional<Nurse> getOneNurse(int id) {
			// TODO Auto-generated method stub
			return nrepo.findById(id);
		}
		public List<Nurse> allNursesByArea(Area a) {
			// TODO Auto-generated method stub
			return nrepo.getNurseByArea(a);
		}

		
		public List<Nurse> allNursesAreaAndSpeciality(Area a, String spec) {
			// TODO Auto-generated method stub
			return nrepo.allNursesAreaAndSpeciality(a,spec);
		}
		public Nurse getOneById(int id) {
			//return nrepo.getOneById(id);
			return nrepo.findById(id).get();
		}
		public List<Object> allNursesSpeciality() {
			return nrepo.allNursesSpeciality();
		}
		

	}
