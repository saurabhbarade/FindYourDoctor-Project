package com.demo.Controllers;

import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.ListIterator;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Entities.Appointment;
import com.demo.Entities.Doctor;
import com.demo.Entities.DoctorTimeTable;
import com.demo.Entities.Nurse;
import com.demo.Entities.NurseTimeTable;
import com.demo.Services.AppointmentNurseService;
import com.demo.Services.AppointmentService;
import com.demo.Services.DoctorService;
import com.demo.Services.DoctorTimeTableService;
import com.demo.Services.NurseService;
import com.demo.Services.NurseTimeTableService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class NurseTimeTableController {

	@Autowired
	NurseTimeTableService nttservice;
	
	@Autowired
	NurseService nservice;
	
	@Autowired
	AppointmentService aservice;
	
	@Autowired
	AppointmentNurseService anservice;
	

	@PostMapping("/updatenursetimetable")
	public NurseTimeTable updateTimeTable(@RequestBody NurseTimeTable ntt) {
		return nttservice.saveTimeTable(ntt);
	}
	
	@GetMapping("/getnursetimetablebyid/{id}")
	public Optional<NurseTimeTable> getTimeTableById(@PathVariable int id) {
		return nttservice.getTimeTableById(id);
	}
	
	@GetMapping("/getnurseappointments/{id}/{date}")
	public List<LocalTime> getTimeTableById(@PathVariable int id,@PathVariable String date) {
		try {
			
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat();
			Date date1=new SimpleDateFormat("dd-MM-yyyy").parse(date);
			@SuppressWarnings("deprecation")
			int da = date1.getDay();
			String day = null;
			switch(da) {
			case 0:day="Sunday";break;
			case 1:day="Monday";break;
			case 2:day="Tuesday";break;
			case 3:day="Wednesday";break;
			case 4:day="Thursday";break;
			case 5:day="Friday";break;
			case 6:day="Saturday";break;
			}
			System.out.println(day);
			//convert date into day
			Nurse n = nservice.getOneById(id);
			NurseTimeTable ntt = nttservice.getAppointmentsByIdandDay(n,day);
			List<LocalTime> slots = new ArrayList<>();
			if(ntt.getStatus().equals("available")) {
				LocalTime st = ntt.getStartTime();
				LocalTime et = ntt.getEndTime();
				
				LocalTime temp = st;
				while( temp.isBefore(et)) {
					slots.add(temp);
					temp=temp.plus(ntt.getSlotDuration(),ChronoUnit.MINUTES);
				}
				
				slots.remove(ntt.getBreakTime());
				System.out.println(slots);
				Date date2=new SimpleDateFormat("yyyy-MM-dd").parse(date);
				List<Object> booked = anservice.getAppointmentByNidandDate(n, date2);
				System.out.println(booked);
				ListIterator<Object> iter = booked.listIterator();
				while(iter.hasNext()){
						slots.remove(iter.next());
				    }
				System.out.println(slots);
				return slots;
				
			}else {
				return slots;
			}
		}
		catch(Exception e) {
			return null;
		}
	}
	
	@GetMapping("/gettimetablebynurseid/{id}")
	public List<NurseTimeTable> getTimeTableByNurseId(@PathVariable int id) {
		Nurse n = nservice.getOneById(id);
		return nttservice.getTimeTableByNurseId(n);
	}
	
	@GetMapping("/allnursetimetable")
	public List<NurseTimeTable> allTimeTable() {
		return nttservice.allNurseTimeTable();
	}
}
