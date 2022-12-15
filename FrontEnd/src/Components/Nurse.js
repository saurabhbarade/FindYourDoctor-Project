import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Nurse() {
    const [nurse,setNurse]=useState({
        firstName:"",
        lastName:"",

    })
    const navigate=useNavigate();

    useEffect(() => {    
        let doc= JSON.parse(sessionStorage.getItem("nurse"));
        setNurse({firstName:doc.firstName,lastName:doc.lastName})
    },[]);

    const logout=()=>{
        sessionStorage.removeItem("nurse");
        navigate("/");
    }
    const styles = {
        header: {
            backgroundImage: 'url("https://www.acp-online.org/wp-content/uploads/2015/01/Dollarphotoclub_57457154.jpg")',
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


        return (
            <>
            {/* <div className="container fluid">
                <button className="btn btn-primary" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
                <h1>Doctor DashBoard</h1>
                <h2>Welcome...{doctor.firstName} {doctor.lastName}</h2>

                <button className='btn btn-primary' onClick={() => navigate("/updatedoctor")} style={{ marginLeft: "10px", marginTop: "10px" }}>Update Profile</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/updatetimetable")}>Update TimeTable</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/updatetimetable")}>Change TimeTable Status</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/doctorcurrentappointments")}>Current Appointments</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/doctorcurrentappointments")}>Cancel Appointments</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/doctorappointmenthistory")}>Appointment History</button>
            </div> */}
            <div style={styles.header}>
                <div style={styles.content}>
            <div className="container" style={{marginBottom : "50px"}}>
                    <div className="row">
                        <div className="col-sm-6 my-3 text-light"><h2 className="">Hello, {nurse.firstName} {nurse.lastName}</h2></div>
                        <div className="col-sm-6 my-3">
                            <button onClick={logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none " >Logout</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card bg-transparent border-0 text-light">
                                <div className="card-body">
                                    <h5 className="card-title">Update Profile</h5>
                                    <p className="card-text">Update your account details.</p>
                                    <button onClick={() => navigate("/updatenurse")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">UPDATE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card bg-transparent border-0 text-light">
                                <div className="card-body">
                                    <h5 className="card-title">Update Time Table</h5>
                                    <p className="card-text">Update your time table.</p>
                                    <button onClick={() => navigate("/updatetimetablenurse")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">UPDATE</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col-sm-6">
                            <div className="card bg-transparent border-0 text-light">
                                <div className="card-body">
                                    <h5 className="card-title">Change Time Table Status</h5>
                                    <p className="card-text">Change your time table status.</p>
                                    <button onClick={() => navigate("/updatetimetablenurse")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">CHANGE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card bg-transparent border-0 text-light">
                                <div className="card-body">
                                    <h5 className="card-title">Current Appointments</h5>
                                    <p className="card-text">Check your current appointments.</p>
                                    <button onClick={() => navigate("/nursecurrentappointments")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">CHECK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="row my-3">
                        
                            <div className="col-sm-6">
                                <div className="card bg-transparent border-0 text-light">
                                    <div className="card-body">
                                        <h5 className="card-title">Appointment History</h5>
                                        <p className="card-text">Check your appointment history.</p>
                                        <button onClick={() => navigate("/nurseappointmenthistory")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">CHECK</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card bg-transparent border-0 text-light">
                                    <div className="card-body">
                                        <h5 className="card-title">Change Password</h5>
                                        <p className="card-text">Change your password.</p>
                                        <button onClick={() => navigate("/changepasswordnurse")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">CHANGE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>

                        
                            
                    </div>
                </>
        );
    
}

export default Nurse;