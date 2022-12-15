package com.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.demo.Entities.Nurse;
import com.demo.Entities.NurseTimeTable;
import com.demo.Repositories.NurseTimeTableRepository;

@Service
public class NurseTimeTableService {
	
	@Autowired
	NurseTimeTableRepository nttrepo;
	
	public NurseTimeTable saveTimeTable(@RequestBody NurseTimeTable ntt) {
		try {
			return nttrepo.save(ntt);
		}
		catch(Exception e) {
			return null;
		}
	}
	
	public List<NurseTimeTable> getTimeTableByNurseId(Nurse n) {
		return nttrepo.getTimeTableByNurseId(n);
	}
	
	public Optional<NurseTimeTable> getTimeTableById(int id) {
		return nttrepo.findById(id);
	}
	
	public List<NurseTimeTable> allNurseTimeTable() {
		return nttrepo.findAll();
	}
	
	public NurseTimeTable getAppointmentsByIdandDay(Nurse n, String day) {
		return nttrepo.getAppointmentsByIdandDay(n,day);
	}
}
