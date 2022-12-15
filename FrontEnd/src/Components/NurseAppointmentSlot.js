import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';


function NurseAppointmentSlot(){

    const [timeslot, setTimeSlots]=useState([]);
    const [date, setDate]=useState("");
    const [empty, setEmpty]=useState([]);
    const [slot,setSlot]=useState([]);

    // const [data,setData]=useState({
    //     appointmentDate:"",
    //     appointmentTime:"",
    //     doctor_id:"",
    //     patient_id:""
    // })
    const [nurse,setNurse]=useState({});

    const [patient,setPatient]=useState({});
    useEffect(() => {    
        let nurse= JSON.parse(sessionStorage.getItem("nurse"));
        setNurse(nurse);
        let patient = JSON.parse(sessionStorage.getItem("patient"));
        setPatient(patient );
    },[]);
    {console.log(patient)}
    const appointments=(e)=>{
        var today,dd,mm,yyyy;
        today = new Date();
        mm=today.getMonth()+1;
        if(mm<10){
            mm=0+""+mm;
        }
        yyyy=today.getFullYear();
        setDate(e.target.value);
        // console.log("dd-"+mm+"-"+yyyy);
        if(e.target.value === dd+"-"+mm+"-"+yyyy){
            setEmpty("Please select valid date!!!")
        }
        else{
            fetch("http://localhost:8080/getnurseappointments/"+nurse.nurseId+"/"+e.target.value)
            .then(r => r.json())
            .then(d => {/*console.log(d);*/setTimeSlots(d)}
            );
        }
}

const minDate=()=>{
    var today,dd,mm,yyyy;
    today = new Date();
    dd=today.getDate()+1;
    if(dd<10){
        dd=0+""+dd;
    }
    mm=today.getMonth()+1;
    if(mm<10){
        mm=0+""+mm;
    }
    yyyy=today.getFullYear();
    return yyyy+"-"+mm+"-"+dd;

}

const maxDate=()=>{
    var today,dd,mm,yyyy;
    today = new Date();
    dd=today.getDate()+14;
    if(dd<10){
        dd=0+""+dd;
    }
    mm=today.getMonth()+1;
    if(mm<10){
        mm=0+""+mm;
    }
    yyyy=today.getFullYear();
    return yyyy+"-"+mm+"-"+dd;
    
}
    const navigate =useNavigate();

    const getTimeSlots=()=>{

            if(timeslot.length==0){
                setEmpty("Nurse Appointments not available for current selection!");
                setSlot([]);
            }else{
                setEmpty("");
                setSlot(timeslot);
                // setEmpty(time);
            }
        

    }
    const book=(e)=>{

         console.log(nurse.nurseId);
         console.log(patient);

        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                appointmentDate : date,
		        appointmentTime : e,
                appointmentType:"walk-in",
		        nurse_id : nurse,
		        patient_id : patient,
                status:"scheduled",
                cancelledBy:"none"
            })
        }
        fetch("http://localhost:8080/savenurseappointment",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                alert("Appointment Booked!");
                navigate('/patienttonurse');
            }
            else{
                alert("Appointment Failed!!!");
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
        <div style={styles.header}>
                <div style={styles.content}>
        <div className="container-fluid" style={{marginBottom : "50px"}}>
          <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/searchnurse")}>Go Back</button> 
    <br/><br/>
           
            <label className="text-light"><b>Select a Date :&nbsp;&nbsp;&nbsp;&nbsp; </b></label>

            <input className='bg-transparent text-light border-0 border-bottom border-primary' type="date" onChange={appointments} min={minDate()} max={maxDate()} name="date" />

             <button  className='btn btn-primary' style={{marginLeft:"10px"}} onClick={getTimeSlots}>View Time Slots</button>
             <h1 className="font-weight-bold offset-4 text-light">Available Appointments</h1>
               
                <p className="text text-danger offset-4"><b>{empty}</b></p>
                
            <Table className="table table-bordered border-primary" >
            <thead className="bg-light text-dark">
                 <tr>
                    <th>Slot</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="bg-transparent text-light">
        {
            slot.map((v)=>{
                return (
            <tr>
                <td>{v}</td>
                <td>
                <button className="btn btn-primary" onClick={()=>book(v)}  >Book Appointment</button>
                </td>
            </tr>
            )})
            
        }
            </tbody>
        </Table>
        </div>
        </div>
        </div>
    );

}
export default NurseAppointmentSlot;