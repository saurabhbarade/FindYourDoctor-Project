import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function NurseAppointmentHistory(){

    const [nurseId,setNurseId]=useState("");
    const [appointments,setAppointments]=useState([]);
    useEffect(() => {
        let nur= JSON.parse(sessionStorage.getItem("nurse"));
        setNurseId(nur.nurseId);
    },[]);

    const allAppointments=()=>{
        fetch("http://localhost:8080/getappointmenthistorybynid/"+nurseId)
        .then(r => r.json())
        .then(d => setAppointments(d))
    }

    const navigate = useNavigate();

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
    return(
        <>
        {/* <div className="container-fluid">
            <button className="btn btn-primary" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <button className='btn btn-primary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/doctor")}>Back to Dashboard</button>
            <button className='btn btn-primary' onClick={allAppointments}>Show All Appointment</button>

            <div>
                <h1 className="font-weight-bold offset-4">Doctor Appointment List</h1>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Appointment Type</th>
                            <th>Appointment Status</th>
                            <th>Patient Id</th>
                            <th>Patient Name</th>
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
                                    <td>{v.patientId.patient_id}</td>
                                    <td>{v.patientId.firstName} {v.patientId.lastName}</td>

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
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/nurse")}>Go Back</button> 
    <br/><br/>
                    <div>
                    <button className="btn btn-primary" onClick={allAppointments}>Show All Appointment</button>
                    <h3>Nurse List</h3>
                    <table className="table table-bordered border-primary">
                        <thead className="bg-dark text-light">
                        <tr>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Appointment Type</th>
                            <th>Appointment Status</th>
                            <th>Patient Id</th>
                            <th>Patient Name</th>
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
                                        <td>{v.patientId.patient_id}</td>
                                        <td>{v.patientId.firstName} {v.patientId.lastName}</td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
                
                </div>
                
                
            </>
    );
}
export default NurseAppointmentHistory;