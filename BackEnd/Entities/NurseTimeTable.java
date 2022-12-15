package com.demo.Entities;

import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="nurse_timetable")
public class NurseTimeTable {
	@Id
	@Column(name="nurse_timetable_id")
	int ttId;
	
	@JsonIgnoreProperties("timetable")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="nurse_id")
	Nurse nurse_id;
	
	@Column
	String weekday;

	@Column(name="start_time")
	LocalTime startTime;
	
	@Column(name="end_time")
	LocalTime endTime;
	
	@Column(name="slot_duration")
	int slotDuration;
	
	@Column(name="break_time")
	LocalTime breakTime;
	
	@Column
	String status;
	
	public NurseTimeTable() {
		super();
		// TODO Auto-generated constructor stub
	}



	public NurseTimeTable(Nurse nurse_id, String weekday, LocalTime startTime, LocalTime endTime, int slotDuration,
			LocalTime breakTime, String status) {
		super();
		this.nurse_id = nurse_id;
		this.weekday = weekday;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slotDuration = slotDuration;
		this.breakTime = breakTime;
		this.status = status;
	}



	public NurseTimeTable(int ttId, Nurse nurse_id, String weekday, LocalTime startTime, LocalTime endTime,
			int slotDuration, LocalTime breakTime, String status) {
		super();
		this.ttId = ttId;
		this.nurse_id = nurse_id;
		this.weekday = weekday;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slotDuration = slotDuration;
		this.breakTime = breakTime;
		this.status = status;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public int getTtId() {
		return ttId;
	}

	public void setTtId(int ttId) {
		this.ttId = ttId;
	}

	public Nurse getNurse_id() {
		return nurse_id;
	}

	public void setDoctor_id(Nurse nurse_id) {
		this.nurse_id = nurse_id;
	}

	public String getWeekday() {
		return weekday;
	}

	public void setWeekday(String weekday) {
		this.weekday = weekday;
	}

	public LocalTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}

	public LocalTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}

	public int getSlotDuration() {
		return slotDuration;
	}

	public void setSlotDuration(int slotDuration) {
		this.slotDuration = slotDuration;
	}

	public LocalTime getBreakTime() {
		return breakTime;
	}

	public void setBreakTime(LocalTime breakTime) {
		this.breakTime = breakTime;
	}
	
	
	
}
