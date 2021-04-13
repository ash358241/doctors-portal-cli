import React, { useContext, useEffect, useState } from 'react';
import AppointmentsBtDate from '../AppointmentsBtDate/AppointmentsBtDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {backgroundColor: '#F4FDFB', height: '100%'}

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectDate, setSelectDate] = useState(new Date());
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({date: selectDate, email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setAppointment(data))
    }, [selectDate])
    
    const handleDateChange = date => {
        setSelectDate(date);
    }
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <AppointmentsBtDate appointment={appointment}></AppointmentsBtDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;