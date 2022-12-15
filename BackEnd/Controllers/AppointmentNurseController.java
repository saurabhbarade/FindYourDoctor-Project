package com.demo.Controllers;


    
	


	import java.text.ParseException;
	import java.text.SimpleDateFormat;
	import java.util.Date;
	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RestController;

	import com.demo.Entities.Appointment;
import com.demo.Entities.AppointmentNurse;
import com.demo.Entities.Doctor;
	import com.demo.Entities.Nurse;
	import com.demo.Entities.Patient;
import com.demo.Services.AppointmentNurseService;
import com.demo.Services.AppointmentService;
	import com.demo.Services.DoctorService;
	import com.demo.Services.NurseService;
	import com.demo.Services.PatientService;

	@CrossOrigin(origins="http://localhost:3000")
	@RestController
	public class AppointmentNurseController {

		@Autowired
		AppointmentNurseService anservice;
		
		
		@Autowired
		NurseService nservice;
		
		@Autowired
		PatientService pservice;
		
		@PostMapping("/savenurseappointment")
		public AppointmentNurse saveAppointment(@RequestBody AppointmentNurse a) {
			System.out.println(a);
			return anservice.saveAppointment(a);
		}
		@PostMapping("/cancelnurseappointment")
		public AppointmentNurse cancelAppointment(@RequestBody AppointmentNurse a) {
			return anservice.cancelAppointment(a);
		}
		
		@GetMapping("/allnurseappointments")
		public List<AppointmentNurse> getAllAppointment(){
			return anservice.getAllAppointment();
		}
		


		
		@GetMapping("/getappointmentnursehistorybypid/{id}")
		public List<AppointmentNurse> getAppointmentHistoryByPid(@PathVariable int id){
			Patient p = pservice.getOneById(id);

			String pattern = "yyyy-MM-dd";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
			String date = simpleDateFormat.format(new Date());
			System.out.println(date);
			Date date1 = null;
			try {
				date1=new SimpleDateFormat("yyyy-MM-dd").parse(date);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(date1);

			
			return anservice.getAppointmentHistoryByPid(p,date1);
		}
		
		@GetMapping("/nurseappointmentsbypatient/{id}")
		public List<AppointmentNurse> getAppointmentByPatient(@PathVariable int id){
			Patient p = pservice.getOneById(id);
			String pattern = "yyyy-MM-dd";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
			String date = simpleDateFormat.format(new Date());
			System.out.println(date);
			Date date1 = null;
			try {
				date1=new SimpleDateFormat("yyyy-MM-dd").parse(date);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(date1);


			return anservice.getAppointmentByPatient(p,date1);
		}
		
		@GetMapping("/appointmentsbynid/{id}")
		public List<AppointmentNurse> getAppointmentByNid(@PathVariable int id){
			Nurse n = nservice.getOneById(id);
			String pattern = "yyyy-MM-dd";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
			String date = simpleDateFormat.format(new Date());
			System.out.println(date);
			Date date1 = null;
			try {
				date1=new SimpleDateFormat("yyyy-MM-dd").parse(date);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(date1);
			return anservice.getAppointmentByNid(n, date1);
			
		}
		
		@GetMapping("/getappointmenthistorybynid/{id}")
		public List<AppointmentNurse> getAppointmentHistoryByNid(@PathVariable int id){
			Nurse n = nservice.getOneById(id);
			String pattern = "yyyy-MM-dd";
			SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
			String date = simpleDateFormat.format(new Date());
			System.out.println(date);
			Date date1 = null;
			try {
				date1=new SimpleDateFormat("yyyy-MM-dd").parse(date);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println(date1);
			return anservice.getAppointmentHistoryByNid(n, date1);
		}
	

}