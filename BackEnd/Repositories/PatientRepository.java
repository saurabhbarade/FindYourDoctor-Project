package com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.Entities.Login;
import com.demo.Entities.Patient;
@Repository
public interface PatientRepository extends JpaRepository<Patient,Integer> {
	@Query("select p from Patient p where login_id= :id")
	Patient getOneByLoginId(Login id);

}
