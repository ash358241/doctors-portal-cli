import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
import { useState } from 'react';


const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;