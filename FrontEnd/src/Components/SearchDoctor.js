import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function SearchDoctor(){

    const [doctor,setDoctor]=useState([]);
    const [city,setCity]=useState([]);
    const [area,setArea]=useState([]);
    const [state,setState]=useState([]);
    const [stateId,setStateId] = useState("");
    const [cityId,setCityId] = useState("");
    const [areaId,setAreaId]=useState("");
    const [error,setError]=useState("");
    const navigate = useNavigate();

    useEffect(() => {    
        fetch("http://localhost:8080/allstates")
        .then(r => r.json())
        .then(d => setState(d))
    },[]);

    const changeHandler = (e) => {
        setAreaId(e.target.value)
       // console.log(e.target.name+" "+e.target.value)
    }

    const refreshPage = (e) => {
        window.location.reload();
      };

    const cityFetch=(e)=>{
        setStateId(e.target.value);
        // console.log(stateId);
        const val=e.target.value;
        fetch("http://localhost:8080/getcitybystate/"+val)
        .then(r => r.json())
        .then(d => setCity(d));
    }

    const areaFetch=(e)=>{
        setCityId(e.target.value);
        // console.log(cityId);
      const val=e.target.value;
      fetch("http://localhost:8080/areabycity/"+val)
      .then(r => r.json())
      .then(d => setArea(d))
    }

    const search=(ev)=>{
        setDoctor([]);
        // if(stateId === "" && cityId === "" && areaId === ""){
        //    setError("Please Select State or City or Area");
        // }else if(stateId !== "" && cityId === "" && areaId === ""){
        //     setError("");
        //     fetch("http://localhost:8080/alldoctorsbystate/"+stateId)
        //     .then(r => r.json())
        //     .then(d => setDoctor(d)) 
        // }else if(stateId !== "" && cityId !== "" && areaId === ""){
        //     setError("");
        //     fetch("http://localhost:8080/alldoctorsbycity/"+cityId)
        //     .then(r => r.json())
        //     .then(d => setDoctor(d)) 
        // }else if(stateId !== "" && cityId !== "" && areaId !== ""){
        //     setError("");
        //     fetch("http://localhost:8080/alldoctorsbyarea/"+areaId)
        //     .then(r => r.json())
        //     .then(d => setDoctor(d)) 
        // }
        if(stateId === "" && cityId === "" && areaId === ""){
            setError("Please Select State and City and Area");
         }else if(stateId !== "" && cityId !== "" && areaId !== "" && specId=="" || specId==0){
             setError("");
             fetch("http://localhost:8080/alldoctorsbyarea/"+areaId)
             .then(r => r.json())
             .then(d => setDoctor(d)) 
         }else if(stateId !== "" && cityId !== "" && areaId !== "" && specId!=""){
            setError("");
            fetch("http://localhost:8080/doctorsbyareaandspec/"+areaId+"/"+specId)
            .then(r => r.json())
            .then(d => setDoctor(d)) 
            // console.log("hii"+specId)
         }

  
    }
    const [speciality,setSpeciality]=useState([]);
    const fetchSpeciality=()=>{
        console.log("hiii");
        fetch("http://localhost:8080/speciality")
        .then(r => r.json())
        .then(d =>{console.log(d); setSpeciality(d)}) 
    }
    const [specId,setSpecId]=useState("");

    const setSpec=(ev)=>{
        setSpecId(ev.target.value);
    }


    const appointment=(ev)=>{
        sessionStorage.setItem("doctor",JSON.stringify(ev));
        navigate("/doctorappointment");
    }
    const logout=()=>{
        sessionStorage.removeItem("patient");
        navigate("/");
    }
    const styles = {
        header: {
            backgroundImage: 'url("https://th.bing.com/th/id/R.1977b6fdf5caca6507d17b8daaef2eb3?rik=AaMtdCZOpsnlpQ&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1412204%2fimages%2fo-DOCTOR-facebook.jpg&ehk=Zak6kTGS5ORNz2gS847a5zZxM31tI2jj8zp7JGlzVO8%3d&risl=&pid=ImgRaw&r=0")',
            height: "100vh",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",

        },
        content: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)'
        }
    }


    return(
        <>
        <div style={styles.header}>
                <div style={styles.content}>
        <div className="container">
        <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/patient")}>Go Back</button> 
<br></br>            
<div>
                <h1 className="font-weight-bold text-light">Search Doctor</h1>

                <div style={{ marginTop: '10px' }} className="form-group">
                    <label className="text-light"><b>  Select Area: </b></label>


                    <select className="bg-transparent text-light" style={{ marginLeft: '10px' }} name="state" onChange={cityFetch}>
                        <option value="">--state--</option>
                        {state.map((v) => {
                            return (
                                <option className="text-dark "key={v.stateId} value={v.stateId}>{v.stateName}</option>
                            );
                        })}
                    </select>

                    <select className="bg-transparent text-light" style={{ marginLeft: '10px' }} name="city" onChange={areaFetch}>
                        <option value="">--city--</option>
                        {city.map((v) => {
                            return (
                                <option className="text-dark" key={v.cityId} value={v.cityId}>{v.cityName}</option>
                            );
                        })}
                    </select>

                    <select className="bg-transparent text-light" style={{ marginLeft: '10px' }} name="areaId" onChange={changeHandler} onBlur={fetchSpeciality}>
                        <option value="">--area--</option>
                        {area.map((v) => {
                            return (
                                <option className="text-dark" key={v.areaId} value={v.areaId}>{v.areaName}</option>
                            );
                        })}
                    </select>
                    <select className="bg-transparent text-light" style={{ marginLeft: '10px', marginTop: "10px" }} name="areaId" onChange={setSpec}>
                        <option value="0">--Speciality--</option>
                        {speciality.map((v) => {
                            return (
                                <option className="text-dark" key={v} value={v}>{v}</option>
                            );
                        })}
                    </select>
                </div>


                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={search}>Search</button>
                <button type="button" className="btn btn-danger" style={{ marginLeft: "10px", marginTop: "10px" }} onClick={refreshPage}>Reset</button>
                <button className="btn btn-danger" onClick={() => navigate("/patient")} style={{ marginLeft: "10px", marginTop: "10px" }}>Cancel</button>
            </div>
            <div>
            <p className="text text-danger"><b>{error}</b></p>  
            </div>
            {/* <div>
        <div>
        <select style={{ marginLeft: '10px',marginTop:"10px" }} name="areaId" onChange={searchBySpeciality}>
                    <option value="0">--Speciality--</option>
                    {
                        speciality.map((v)=>{
                        return (
                            <option key={v} value={v} >{v}</option>
                        )})
                    }
                </select>
        </div>
        <button  className='btn btn-primary' style={{marginLeft:"10px",marginTop:"10px"}} onClick={searchBySpeciality}>Search</button>
        <button type="button" className="btn btn-danger" style={{marginLeft: "10px",marginTop:"10px"}} onClick={refreshPage}>Reset</button>
        <button className="btn btn-danger" onClick={() => navigate("/patient")} style={{marginLeft: "10px",marginTop:"10px"}}>Cancel</button>
     
        </div> */}
        
        </div>
        <div className="container my-4">
                <div>
                
                    <h3 className="text-light">Doctor List</h3>
                    <table className="table table-bordered border-primary">
                        <thead className="bg-dark text-light">
                        <tr>
                        <th>Speaciality</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Graduation</th>
                        <th>Post Graduation</th>
                        <th>Fees</th>
                        <th>Area Name</th>
                        <th>City Name</th>
                        <th>State Name</th>
                        <th>Action</th>
                    </tr>
                        </thead>
                        <tbody thead className="text-light">
                            {doctor.map((v) => {
                        return (
                            <tr>
                                <td>{v.speciality}</td>
                                <td>{v.firstName}</td>
                                <td>{v.lastName}</td>
                                <td>{v.gender}</td>
                                <td>{v.graduation}</td>
                                <td>{v.postGraduation}</td>
                                <td>{v.fees}</td>
                                <td>{v.area_id.areaName}</td>
                                <td>{v.area_id.city_id.cityName}</td>
                                <td>{v.area_id.city_id.state_id.stateName}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => appointment(v)}>Book Appointment</button>
                                </td>
                            </tr>
                        );
                            })}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            </div></>
    )
}
export default SearchDoctor;
