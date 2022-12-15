package com.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.Entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login,Integer> {

	@Query("select l from Login l where user_name= :user_name and password= :password")
	Login loginCheck(String user_name, String password);

	@Query("select l from Login l where user_name = :user_name")
	Login forgotPassword(String user_name);
	
	@Query("select l from Login l where user_name = :user_name")
	Login loginCheck1(String user_name);

	

}
