import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        loginerror: ""
    });




    const changeHandler = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }

    const navigate = useNavigate();

    const submitData = (e) => {
        if (data.username == '') {
            alert('Username cannot be null');
            return;
        }
        if (data.password == '') {
            alert('Password cannot be null');
            return;
        }
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: data.username,
                password: data.password
            })
        }
        fetch("http://localhost:8080/logincheck", reqOptions)
            .then(resp => resp.text())
            .then(data => {
                if (data.length !== 0) {
                    const json = JSON.parse(data);
                    if (json.login_id.user_type === "Patient") {
                        sessionStorage.setItem("patient", JSON.stringify(json))
                        navigate('/patientchoice');
                    }

                    if (json.login_id.user_type == "Doctor") {
                        sessionStorage.setItem("doctor", JSON.stringify(json))
                        navigate('/doctor');
                    }
                    if (json.login_id.user_type == "Nurse") {
                        sessionStorage.setItem("nurse", JSON.stringify(json))
                        navigate('/nurse');
                    }

                    if (json.user_type == "Admin") {
                        sessionStorage.setItem("admin", JSON.stringify(json))
                        navigate('/admin');
                    }
                }
                else {
                    //setData({loginerror:"Wrong Username or Password (or account may be disabled)! Try Again..."})
                    alert("Wrong Username or Password (or account may be disabled)! Try Again...");
                }
            })

    }


    const styles = {
        header: {
            backgroundImage: 'url("https://108pkt40d39i1mdq4v41ganb-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/LPN-to-RN-Bridge-Programs-How-to-Crossover-and-Succeed-1024x512.jpg")',
            height: "100vh",
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",

        },
        content: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0)'
        }
    }

    return (
        <div>
                   <div style={styles.header}>
                <div style={styles.content}>
                        <div className="row m-0 p-0">
                        
                            <div className="card col-md-5 offset-7 bg-transparent border-0"style={{padding:"100px"}}>
                                <h2 className='text-center text-dark'>Login</h2><br/>

                                <form >
                                    <div className="form-group">
                                        
                                        <input type="email" placeholder="Enter Email ID" name="username" className="form-control bg-transparent text-dark  border-0 border-bottom border-primary"
                                            value={data.username} onChange={changeHandler} />

                                    </div><br/>
                                    <div className="form-group">
                                        
                                        <input type="password" placeholder="Password" name="password" className="form-control bg-transparent text-dark border-0 border-bottom border-primary"
                                            value={data.password} onChange={changeHandler} />

                                    </div ><br/>
                                    <div style={{ marginTop: "10px", marginLeft: "100px" }}>
                                        <button className="btn btn-success" onClick={submitData}>Login</button>
                                        <button className="btn btn-danger" onClick={() => navigate("/")} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>

                                </form><br/>
                                <a href="/forgotpassword">&nbsp;&nbsp;&nbsp;Forgot password? click here...</a>
                                <p className="text-danger">{data.loginerror}</p>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                    </div>
         

    );
}

export default Login;