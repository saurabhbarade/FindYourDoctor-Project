import { useState, useEffect } from "react";
import React from 'react'
import { useNavigate } from 'react-router-dom';



const PatientChoice = () => {

    const [state, setState] = useState({
        firstName: "",
        lastName: ""
    });
    const navigate = useNavigate();

    // Similar to componentDidMount and componentDidUpdate:  
    useEffect(() => {
        let patient = JSON.parse(sessionStorage.getItem("patient"));
        setState({ firstName: patient.firstName, lastName: patient.lastName })
    }, []);

    const logout = () => {
        sessionStorage.removeItem("patient");
        navigate("/");
    }
    const styles={
    header:{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp2789220.jpg")',
    height: "100vh",
    backgroundRepeat:'no-repeat',
    backgroundSize: "cover",
    
            },
    content:{
        height:'100%',
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.7)'
    }
   }

    return (
        <>
       <div style={styles.header}> 
       <div style={styles.content}>
            <div className='container py-2'>
                <div className="row my-3 py-0">
                    <div className="col-sm-6"><h2 class="text-light">Hello, {state.firstName} {state.lastName}</h2></div>
                    <div className="col-sm-2">
                        <button onClick={() => navigate("/updatepatient")} className="btn btn-link btn-info text-dark offset-10  text-decoration-none ">UpdateProfile</button>
                    </div>
                    <div className="col-sm-1 offset-1">
                    <button className="btn btn-info " onClick={() => navigate("/changepasswordpatient")} style={{marginLeft: "10px"}}>ChangePassword</button>                    </div>
                  
                    <div className="col-sm-2">
                        <button onClick={logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none ">Logout</button>
                    </div>
                    
                </div>
            </div>

            
            <div class="container-fluid p-0 pb-5">
                <div class="owl-carousel header-carousel position-relative">
                    <div class="owl-carousel-item position-relative">
                        <img class="img-fluid" src="img/carousel-1.jpg" alt=""></img>
                        <div class="carousel-inner">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-lg-8 text-center">
                                        <h3 class="display-5 text-white animated slideInDown mb-4">Book appointments on the go with the best specialised doctors and day care nurses in your city</h3>
                                        <p class="fs-5 text-light mb-4 pb-2">Patients have the provision to navigate through doctor's or nurse's appointment booking system based on his medical requirements.</p>
                                        <button onClick={() => navigate("/patient")} class="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Doctor</button>
                                        <button onClick={() => navigate("/patienttonurse")} class="btn btn-primary rounded-pill py-md-3 px-md-5 animated slideInRight">Nurse</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       </div>
        </>
    )
}

export default PatientChoice
