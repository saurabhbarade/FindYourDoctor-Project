package com.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.demo.Entities.Doctor;
import com.demo.Entities.DoctorTimeTable;
import com.demo.Repositories.DoctorTimeTableRepository;

@Service
public class DoctorTimeTableService {
	
	@Autowired
	DoctorTimeTableRepository dttrepo;
	
	public DoctorTimeTable saveTimeTable(DoctorTimeTable dtt) {
		try {
			return dttrepo.save(dtt);
		}
		catch(Exception e) {
			return null;
		}
	}
	
	public List<DoctorTimeTable> getTimeTableByDoctorId(Doctor d) {
		return dttrepo.getTimeTableByDoctorId(d);
	}
	
	public Optional<DoctorTimeTable> getTimeTableById(int id) {
		return dttrepo.findById(id);
	}
	
	public List<DoctorTimeTable> allDoctorTimeTable() {
		return dttrepo.findAll();
	}
	
	public DoctorTimeTable getAppointmentsByIdandDay(Doctor d, String day) {
		return dttrepo.getAppointmentsByIdandDay(d,day);
	}
}
