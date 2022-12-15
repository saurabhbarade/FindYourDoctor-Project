package com.demo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Entities.Area;
import com.demo.Entities.Login;
import com.demo.Entities.Nurse;
import com.demo.Entities.NurseRegistration;
import com.demo.Repositories.LoginRepository;
import com.demo.Services.AreaService;
import com.demo.Services.CityService;
import com.demo.Services.LoginService;
import com.demo.Services.NurseService;
import com.demo.Services.StateService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class NurseController {

	@Autowired
	NurseService nservice;

	@Autowired
	LoginService lservice;

	@Autowired
	AreaService aservice;

	@Autowired
	StateService sservice;

	@Autowired
	CityService cservice;
	
	@Autowired
	LoginRepository loginrepo;

	@PostMapping("/savenurse")
	public Nurse saveNurse(@RequestBody NurseRegistration nr) {
		Login present=loginrepo.loginCheck1(nr.getUserName());
		if(present!=null) {return null;}
		else {
		Login l = new Login(nr.getUserName(), nr.getPassword(), "Nurse", "active");
		Login inserted = lservice.saveUser(l);
		Area area = aservice.getAreaById(nr.getAreaId());
		if (inserted != null && area != null) {
			Nurse d = new Nurse(nr.getFirstName(), nr.getLastName(), nr.getMobileNumber(), nr.getGender(), nr.getDob(),
					nr.getGraduation(), nr.getPostGraduation(), nr.getSpeciality(), nr.getFees(), area, inserted);
			return nservice.saveNurse(d);
		} else {
			return null;
		}}
	}

	@PostMapping("/updatenurse")
	public Nurse updateNurse(@RequestBody Nurse nr) {
		try {
			return nservice.updateNurse(nr);
		} catch (Exception e) {
			return null;
		}
	}

	@GetMapping("/allnurses")
	public List<Nurse> allNurses() {
		return nservice.allNurses();
	}

	@GetMapping("/getoneNurse/{id}")
	public Optional<Nurse> getOneNurse(@PathVariable int id) {
		return nservice.getOneNurse(id);
	}

	@GetMapping("/allNursesbyarea/{id}")
	public List<Nurse> allNursesByArea(@PathVariable int id) {
		Area a = aservice.getAreaById(id);
		return nservice.allNursesByArea(a);
	}

	
	
	@GetMapping("/nursespeciality")
	public List<Object> allNursesSpeciality() {
		return nservice.allNursesSpeciality();
	}

	  

	@GetMapping("/Nursesbyareaandspec/{areaId}/{spec}")
	public List<Nurse> allNursesAreaAndSpeciality(@PathVariable int areaId, @PathVariable String spec) {
		Area a = aservice.getAreaById(areaId);
		return nservice.allNursesAreaAndSpeciality(a, spec);
	}

}

