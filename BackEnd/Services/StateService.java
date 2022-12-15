package com.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.demo.Controllers.List;
import com.demo.Entities.State;
import com.demo.Repositories.StateRepository;
import java.util.List;

@Service
public class StateService {
	
	@Autowired
	StateRepository srepo;
	
	public State saveState(State s) {
		try {
			return srepo.save(s);
		}
		catch(Exception e) {
			return null;
		}
	}

	public List<State> allStates() {
		return srepo.findAll();
	}

	public State getById(int id) {
		// TODO Auto-generated method stub
		return srepo.getStateById(id);
	}
}
