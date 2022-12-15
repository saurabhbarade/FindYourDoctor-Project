import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function PatientCurrentAppointments(){
    const [patientId,setPatientId]=useState("");
    const [appointments,setAppointments]=useState([]);
    const [empty, setEmpty]=useState([]);
    useEffect(() => {
        let pat= JSON.parse(sessionStorage.getItem("patient"));
        setPatientId(pat.patient_id);
    },[]);

    const currentappointments=()=>{
        fetch("http://localhost:8080/appointmentsbypatient/"+patientId)
        .then(r => r.json())
        .then(d => {if(d.length==0){
            setEmpty("Yon have no appointments!!");
            setAppointments([]);
        }
        else{
            setEmpty("");
            setAppointments(d);
        }})
    }

    const navigate = useNavigate();

    const cancel=(ev)=>{
        console.log(ev);
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                appointmentId:ev.appointmentId,
                appointmentDate : ev.appointmentDate,
		        appointmentTime : ev.appointmentTime,
                appointmentType:ev.appointmentType,
		        doctorId : ev.doctorId,
		        patientId : ev.patientId,
                status:"cancelled",
                cancelledBy:"Patient"
            })
        }
        fetch("http://localhost:8080/cancelappointment",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                alert("Appointment cancelled!");
                navigate('/patient');
            }
            else{
                alert("Appointment cancel Failed!!!");
                window.location.reload();
            }
        })
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
        {/* <div className="container-fluid">
            <button className="btn btn-primary" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <button className='btn btn-primary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/patient")}>Back to Dashboard</button>
            <button className='btn btn-primary' style={{ float: "left", marginTop: "10px" }} onClick={currentappointments}>Show Current Appointments</button>

            <div>
                <h1 className="font-weight-bold offset-4">Patient Appointment List</h1>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Appointment Type</th>
                            <th>Appointment Status</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((v) => {
                            return (
                                <tr>
                                    <td>{v.appointmentDate}</td>
                                    <td>{v.appointmentTime}</td>
                                    <td>{v.appointmentType}</td>
                                    <td>{v.status}</td>
                                    <td>{v.doctorId.firstName} {v.doctorId.lastName}</td>
                                    <td>{v.doctorId.speciality}</td>

                                    <td>
                                        <button className="btn btn-primary" onClick={() => cancel(v)}>Cancel Appointment</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div> */}
        <div style={styles.header}>
                <div style={styles.content}>
        <div className="container text-light" style={{marginBottom : "50px"}}>
        <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/patient")}>Go Back</button> 
<br></br>                 <div>
                    <button className="btn btn-primary" onClick={currentappointments}>Show Current Appointments</button>
                    <h3>Patient Appointment List</h3>
                    <table className="table table-bordered border-primary">
                        <thead className="bg-dark text-light">
                        <tr>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Appointment Type</th>
                            <th>Appointment Status</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody className="text-light">
                        {appointments.map((v) => {
                            return (
                                <tr>
                                    <td>{v.appointmentDate}</td>
                                    <td>{v.appointmentTime}</td>
                                    <td>{v.appointmentType}</td>
                                    <td>{v.status}</td>
                                    <td>{v.doctorId.firstName} {v.doctorId.lastName}</td>
                                    <td>{v.doctorId.speciality}</td>

                                    <td>
                                        <button className="btn btn-primary" onClick={() => cancel(v)}>Cancel Appointment</button>
                                    </td>
                                </tr>
                            );
                            })}
                        </tbody>
                    </table>
                    <h3 className="text text-danger offset-4"><b>{empty}</b></h3>
                </div>
                </div>
                </div>
            </div></>
    );
}
export default PatientCurrentAppointments;