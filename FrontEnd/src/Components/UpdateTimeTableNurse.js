import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function UpdateTimeTableNurse(){

    const [nurseId,setNurseId]=useState("");
    const [TimeTable,setTimeTable]=useState([]);
    const [data,setData]=useState({
        nurseId:"",
        nurseId:{},
        weekday:"",
        startTime:"",
        endTime:"",
        slotDuration:"",
        breakTime:""

    })
    const navigate=useNavigate();
    const logout=()=>{
        sessionStorage.removeItem("nurse");
        navigate("/");
    }
    useEffect(() => {
        let nur= JSON.parse(sessionStorage.getItem("nurse"));
        setNurseId(nur.nurseId);
        
    },[]);

    const getTimeTable=()=>{
        fetch("http://localhost:8080/gettimetablebynurseid/"+nurseId)
        .then(r => r.json())
        .then(d => {/*console.log(d);*/setTimeTable(d)});
    }
    const update=(ev)=>{
        sessionStorage.setItem("daytimetable",JSON.stringify(ev))
        navigate("/updatenursetimetablebyday")
    }

    const changeHandler = (e) => {
        setData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
        // console.log(e.target.name+" "+e.target.value)
    }
    const notAvailable=(ev)=>{
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                ttId:ev.ttId,
                nurse_id:ev.nurse_id,
                weekday:ev.weekday,
                startTime:ev.startTime,
                endTime:ev.endTime,
                slotDuration:ev.slotDuration,
                breakTime:ev.breakTime,
                status:"not available"
            })
        }
        fetch("http://localhost:8080/updatenursetimetable",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
                        {
                            alert("Status Updated!");
                            window.location.reload()
                        }
                        else{
                            alert("Status Update Failed!")
                        }
                    })
    }

    const available=(ev)=>{
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                ttId:ev.ttId,
                nurse_id:ev.nurse_id,
                weekday:ev.weekday,
                startTime:ev.startTime,
                endTime:ev.endTime,
                slotDuration:ev.slotDuration,
                breakTime:ev.breakTime,
                status:"available"
            })
        }
        fetch("http://localhost:8080/updatenursetimetable",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
                        {
                            alert("Status Updated!");
                            window.location.reload()
                        }
                        else{
                            alert("Status Update Failed!")
                        }
                    })
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
        {/* <div className="container fluid">
            <button className="btn btn-primary" onClick={logout} style={{ float: "right", marginTop: "10px", marginRight: "10px" }}>Logout</button>
            <button className='btn btn-primary' style={{ float: "right", marginTop: "10px", marginRight: "10px" }} onClick={() => navigate("/doctor")}>Back to Dashboard</button>
            <h2 className='text-center'>Update Information </h2>
            <button className="btn btn-primary" onClick={getTimeTable}>Get TimeTable</button>
            <div>
                <h1 className="font-weight-bold offset-4">Doctor TimeTable</h1>

                <Table striped bordered hover variant="dark">


                    <thead>
                        <tr>
                            <th>Weekday</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Slot Duration</th>
                            <th>Break Time</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TimeTable.map((v) => {
                            return (
                                <tr>
                                    <td>{v.weekday}</td>
                                    <td>{v.startTime}</td>
                                    <td>{v.endTime}</td>
                                    <td>{v.slotDuration}</td>
                                    <td>{v.breakTime}</td>
                                    <td>{v.status}</td>
                                    <td><button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={() => update(v)}>Update</button></td>
                                    <td><button style={{ display: v.status === 'available' ? 'block' : 'none' }} className="btn btn-primary" onClick={() => notAvailable(v)}>Not Available</button>
                                        <button style={{ display: v.status === 'not available' ? 'block' : 'none' }} className="btn btn-primary" onClick={() => available(v)}>Available</button></td>
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
    <br/><br/>                <div>
                    <button className="btn btn-primary" onClick={getTimeTable}>Get TimeTable</button>
                    <h3>Nurse List</h3>
                    <table className="table table-bordered border-primary">
                        <thead className="bg-dark text-light">
                        <tr>
                            <th>Weekday</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Slot Duration</th>
                            <th>Break Time</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Change Status</th>
                        </tr>
                        </thead >
                        <tbody className="text-light">
                            {TimeTable.map((v) => {
                                return (
                                    <tr>
                                    <td>{v.weekday}</td>
                                    <td>{v.startTime}</td>
                                    <td>{v.endTime}</td>
                                    <td>{v.slotDuration}</td>
                                    <td>{v.breakTime}</td>
                                    <td>{v.status}</td>
                                    <td><button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={() => update(v)}>Update</button></td>
                                    <td><button style={{ display: v.status === 'available' ? 'block' : 'none' }} className="btn btn-primary" onClick={() => notAvailable(v)}>Not Available</button>
                                        <button style={{ display: v.status === 'not available' ? 'block' : 'none' }} className="btn btn-primary" onClick={() => available(v)}>Available</button></td>
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
export default UpdateTimeTableNurse;