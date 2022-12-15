import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function PatientNurseAppointmentHistory(){

    const [patientId,setPatientId]=useState("");
    const [appointments,setAppointments]=useState([]);
    useEffect(() => {
        let pat= JSON.parse(sessionStorage.getItem("patient"));
        setPatientId(pat.patient_id);
    },[]);

    const currentappointments=()=>{
        console.log(patientId);
        fetch("http://localhost:8080/getappointmentnursehistorybypid/"+patientId)
        .then(r => r.json())
        .then(d => {console.log(d); setAppointments(d)})
    }

    const navigate = useNavigate();

    const logout=()=>{
        sessionStorage.removeItem("patient");
        navigate("/");
    }
    const styles = {
        header: {
            backgroundImage: 'url("https://www.medicolinen.com/wp-content/uploads/2017/07/Medico-Blog2-Image.jpg")',
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
            <button className='btn btn-primary' style={{ float: "left", marginTop: "10px" }} onClick={currentappointments}>Show Appointment History</button>

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

                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((v) => {
                            return (
                                <tr>
                                    <td>{v.appointmentDate}</td>
                                    <td>{v.appointmentTime}</td>
                                    <td>{v.appointmentType}</td>
                                    <td style={{ display: v.status === 'cancelled' ? 'block' : 'none' }}>{v.status}</td>
                                    <td style={{ display: v.status === 'scheduled' ? 'block' : 'none' }}>success</td>
                                    <td>{v.doctorId.firstName} {v.doctorId.lastName}</td>
                                    <td>{v.doctorId.speciality}</td>


                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div> */}
        <div style={styles.header}>
                <div style={styles.content}>
        <div className="container" style={{marginBottom : "50px"}}>
        <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/patienttonurse")}>Go Back</button> 
<br></br>                 <div>
                    <button className="btn btn-primary" onClick={currentappointments}>Show Appointment History</button>
                    <h3 className="text-light">Patient Appointment List</h3>
                    <table className="table table-bordered border-primary">
                        <thead className="bg-dark text-light">
                        <tr>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Appointment Type</th>
                            <th>Appointment Status</th>
                            <th>Nurse Name</th>
                            <th>Nurse Speciality</th>

                        </tr>
                        </thead>
                        <tbody className="text-light">
                        {appointments.map((v) => {
                            return (
                                <tr>
                                    <td>{v.appointmentDate}</td>
                                    <td>{v.appointmentTime}</td>
                                    <td>{v.appointmentType}</td>
                                    <td style={{ display: v.status === 'cancelled' ? 'block' : 'none' }}>{v.status}</td>
                                    <td style={{ display: v.status === 'scheduled' ? 'block' : 'none' }}>success</td>
                                    <td>{v.nurseId.firstName} {v.nurseId.lastName}</td>
                                    <td>{v.nurseId.speciality}</td>


                                </tr>
                            );
                            })}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            </div></>
    );
}
export default PatientNurseAppointmentHistory;