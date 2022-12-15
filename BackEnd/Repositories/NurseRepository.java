package com.demo.Repositories;
  
  import java.util.List;
  
  import org.springframework.data.jpa.repository.JpaRepository; import
  org.springframework.data.jpa.repository.Query; import
  org.springframework.stereotype.Repository;
  
  import com.demo.Entities.Area; import com.demo.Entities.Login; import
  com.demo.Entities.Nurse;
  
  @Repository 
  public interface NurseRepository extends JpaRepository<Nurse,Integer> {
  
  @Query("select n from Nurse n where login_id= :id") 
  Nurse getOneByLoginId(Login id);
  
  @Query("select n from Nurse n where area_id= :a")
  List<Nurse> getNurseByArea(Area a);
  
 
  
  @Query("select n from Nurse n where area_id= :a and speciality= :spec")
  List<Nurse> allNursesAreaAndSpeciality(Area a, String spec);
  
  @Query("select DISTINCT(n.speciality) from Nurse n")
	List<Object> allNursesSpeciality();

  }
