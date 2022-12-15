import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function UpdateNurseTimeTableByDay(){
    const [timetable,setTimetable]=useState({
        ttId: "",
        nurse_id: {},
        weekday:"",
        startTime: "",
        endTime: "",
        slotDuration: "",
        breakTime: "",
        status:""
    })
    useEffect(() => {
        const tt= JSON.parse(sessionStorage.getItem("daytimetable"));
        setTimetable({ttId:tt.ttId,nurse_id:tt.nurse_id,weekday:tt.weekday,startTime:tt.startTime,endTime:tt.endTime,slotDuration:tt.slotDuration,breakTime:tt.breakTime,status:tt.status})
        
    },[]);
    const navigate=useNavigate();
    const logout=()=>{
        sessionStorage.removeItem("nurse");
        navigate("/");
    }
    
    const changeHandler = (e) => {
        setTimetable((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }));
        console.log(e.target.name+" "+e.target.value)
    }
    const refreshPage = (e) => {
        window.location.reload();
      };


      const submitData=(e)=>{
        e.preventDefault();
        const reqOptions ={
            method : 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                ttId: timetable.ttId,
                nurse_id: timetable.nurse_id,
                weekday: timetable.weekday,
                startTime: timetable.startTime,
                endTime: timetable.endTime,
                slotDuration: timetable.slotDuration,
                breakTime: timetable.breakTime,
                status: timetable.status

            })
        }
        fetch("http://localhost:8080/updatenursetimetable",reqOptions)
        .then(resp=>resp.text())
        .then(data=> {if(data.length != 0)
            {
                alert("update successful!!!");
                sessionStorage.removeItem("daytimetable")
                navigate('/updatetimetablenurse');
            }
            else{
                alert("Failed!!!");
                window.location.reload();
               
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
        <div style={styles.header}>
                <div style={styles.content}>
        <div  className="container fluid text-light" style={{marginBottom : "50px"}}>
            <button className="btn btn-danger" onClick={logout} style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Logout</button>
        <button  className='btn btn-secondary' style={{float:"right",marginTop:"10px",marginRight:"10px"}} onClick={() => navigate("/nurse")}>Go Back</button> 
    <br/><br/>
            <h2>Update Time Table</h2>
            <form method="POST">

                <div style={{ marginTop: '10px' }} className = "form-group">
                    <label><b>  Weekday: </b></label>
                    <p>{timetable.weekday}</p>
                    <input type="text" placeholder={timetable.weekday}  name="weekday" className="form-control bg-transparent text-light  border-0 border-bottom border-primary" 
                        value={timetable.weekday} disabled/>
                </div>
                <div style={{ marginTop: '10px' }} className = "form-group">
                    <label><b>  Start Time: </b></label>
                    <input type="text" placeholder={timetable.startTime} name="startTime" className="form-control bg-transparent text-light  border-0 border-bottom border-primary" 
                        value={timetable.startTime} onChange={changeHandler}/>
                </div >
                <div style={{ marginTop: '10px' }} className = "form-group">
                    <label><b>  End Time: </b></label>
                    <input type="text" placeholder={timetable.endTime} name="endTime" className="form-control bg-transparent text-light  border-0 border-bottom border-primary" 
                        value={timetable.endTime} onChange={changeHandler}/>
                </div >
                <div style={{ marginTop: '10px' }} className = "form-group">
                    <label><b>  Slot Duration: </b></label>
                    <input type="text" placeholder={timetable.slotDuration} name="slotDuration" className="form-control bg-transparent text-light  border-0 border-bottom border-primary" 
                        value={timetable.slotDuration} onChange={changeHandler}/>
                </div >
                <div style={{ marginTop: '10px' }} className = "form-group">
                    <label><b>  Break Time: </b></label>
                    <input type="text" placeholder={timetable.breakTime} name="breakTime" className="form-control bg-transparent text-light  border-0 border-bottom border-primary" 
                        value={timetable.breakTime} onChange={changeHandler}/>
                </div >
                


                <div style={{marginTop: "10px"}}>
                <button className="btn btn-success" onClick={submitData}>Update</button>
                <button type="button" className="btn btn-danger" style={{marginLeft: "10px"}} onClick={refreshPage}>Reset</button>
                <button className="btn btn-danger" onClick={() => navigate("/nurse")} style={{marginLeft: "10px"}}>Cancel</button>


                </div>

                </form>
        </div>
        </div>
        </div>
    );
}
export default UpdateNurseTimeTableByDay;