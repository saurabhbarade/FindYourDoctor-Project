import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Patient() {
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

    return (
        <>
            {/* <div className="container fluid">
            <button className="btn btn-primary" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <div className="container-fluid">
                <h1>Patient DashBoard</h1>
                <h2>Welcome...{state.firstName} {state.lastName}</h2>
                <button className='btn btn-primary' onClick={() => navigate("/updatepatient")} style={{ marginLeft: "10px", marginTop: "10px" }}>Update Profile</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/searchdoctor")}>Search Doctor</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/patientcurrentappointments")}>Current Appointments</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/patientappointmenthistory")}>Appointment History</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/patientcurrentappointments")}>Cancel Appointments</button>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => navigate("/searchdoctor")}>Book Appointment</button>
            </div>

        </div> */}
        <div style={styles.header}>
                <div style={styles.content}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 my-3"><h2 className="text-light">Hello, {state.firstName} {state.lastName}</h2></div>
                    <div className="col-sm-4 my-3">
                        <button onClick={() => navigate("/patientchoice")} className="btn btn-link btn-secondary text-light offset-10 text-uppercase text-decoration-none ">Back</button>
                    </div>
                    <div className="col-sm-1 my-3">
                        <button onClick={logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none ">Logout</button>
                    </div>


                </div>

                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card bg-transparent border-0 text-light">
                            <div className="card-body">
                                <h5 className="card-title">Update Profile</h5>
                                <p className="card-text">Update your account details.</p>
                                <button onClick={() => navigate("/updatepatient")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">UPDATE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card bg-transparent border-0 text-light">
                            <div className="card-body">
                                <h5 className="card-title">Search Doctor</h5>
                                <p className="card-text">Search doctor.</p>
                                <button onClick={() => navigate("/searchdoctor")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">SEARCH</button>

                            </div>

                        </div>





                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-sm-6">
                        <div className="card bg-transparent border-0 text-light">
                            <div className="card-body">
                                <h5 className="card-title">Current Appointments</h5>
                                <p className="card-text">Check your current appointments.</p>
                                <button onClick={() => navigate("/patientcurrentappointments")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">CHECK</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card bg-transparent border-0 text-light">
                            <div className="card-body">
                                <h5 className="card-title">Appointment History</h5>
                                <p className="card-text">Check your appointment history.</p>
                                <button onClick={() => navigate("/patientappointmenthistory")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">CHECK</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">

                    <div className="col-sm-6">
                        <div className="card bg-transparent border-0 text-light">
                            <div className="card-body">
                                <h5 className="card-title">Book Appointment</h5>
                                <p className="card-text">Book your appointment.</p>
                                <button onClick={() => navigate("/searchdoctor")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">BOOK</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card bg-transparent border-0 text-light">
                            <div className="card-body">
                                <h5 className="card-title">Change Password</h5>
                                <p className="card-text">Change your password.</p>
                                <button onClick={() => navigate("/changepasswordpatient")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">CHANGE</button>
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
















{/*
class Patient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patientId: '',
            firstName: ''
        }

    }
    componentDidMount(){
        let patient = JSON.parse(sessionStorage.getItem("patient"));
        this.setState({
            patientId: patient.patient_id,
            firstName: patient.first_name
        })
    }
    render() {
        return (
            <div>
                <h1>Patient Page{this.state.patientId}{this.state.firstName}</h1>
            </div>
        );
    }
}
*/}
export default Patient;