import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function PatientToNurse() {
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
            backgroundImage: 'url("https://www.medicolinen.com/wp-content/uploads/2017/07/Medico-Blog2-Image.jpg")',
            height: "100vh",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",

        },
        content: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)'
        }
    }
    return (
        <>
           
            <div style={styles.header}>
                <div style={styles.content}>
                    <div className="container py-2">
                        <div className="row">
                            <div className="col-sm-6 text-light"><h2 className="">Hello, {state.firstName} {state.lastName}</h2></div>
                            <div className="col-sm-4">
                                <button onClick={() => navigate("/patientchoice")} className="btn btn-link btn-secondary text-light offset-10 text-uppercase text-decoration-none ">Back</button>
                            </div>
                            <div className="col-sm-1">
                                <button onClick={logout} className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none ">Logout</button>
                            </div>

                        </div>

                        <div className="row my-3">
                            <div className="col-sm-4">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-light">Update Profile</h5>
                                        <p className="card-text text-light">Update your account details.</p>
                                        <button onClick={() => navigate("/updatepatient")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">UPDATE</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-4">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-light">Search Nurse</h5>
                                        <p className="card-text text-light">Search Nurse.</p>
                                        <button onClick={() => navigate("/searchnurse")} class="btn btn-primary rounded-pill py-md-2 px-md-5">SEARCH</button>

                                    </div>

                                </div>





                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col-sm-4">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-light">Current Appointments</h5>
                                        <p className="card-text text-light">Check your current appointments.</p>
                                        <button onClick={() => navigate("/patientnursecurrentappointments")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">CHECK</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4 offset-4">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-light">Appointment History</h5>
                                        <p className="card-text text-light">Check your appointment history.</p>
                                        <button onClick={() => navigate("/patientnurseappointmenthistory")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">CHECK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">



                            <div className="col-sm-4">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-light">Book Appointment</h5>
                                        <p className="card-text text-light">Book your appointment.</p>
                                        <button onClick={() => navigate("/searchnurse")} class="btn btn-primary rounded-pill py-md-2 px-md-5 me-3 animated slideInLeft">BOOK</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-4">
                                <div className="card bg-transparent border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-light">Change Password</h5>
                                        <p className="card-text text-light">Change your password.</p>
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
export default PatientToNurse;