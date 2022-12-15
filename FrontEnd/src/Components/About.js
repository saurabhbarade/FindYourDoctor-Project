import React from 'react'
const About = () => {
    return (
        <>
            <div className="container">
                <h3 className="py-3">About Us</h3>
                <p>
                    find Your Doctor is a web service for booking medical consultations with specialised doctors in your city online. This web service also provides the additional faciltiy of specialised day care nurses for patients who don't require hospitalisation and are in need of home care. Patients can book appointments by selecting any of the time slots given by the doctor and nurse.</p>
                <p> Some additional functionalities are - user can search for a doctor and nurse by area and specialization. Also, the user, doctor and nurse can manage their booked appointments.
                </p>
                <p className="text-muted">Regards, from creators:
                    <ul>
                        <li>Dishi Kanade</li>
                        <li>Saurabh Barade</li>
                        <li>Akshay Jagtap</li>
                        <li>Pankaj Wankhede</li>
                        <li>Prashant Dhangar</li>
                    </ul>
                </p>
            </div>
        </>
    )
}

export default About
