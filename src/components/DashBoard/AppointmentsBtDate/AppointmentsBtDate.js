import React from 'react';

const AppointmentsBtDate = ({appointment}) => {
    console.log(appointment)
    return (
        <div>
            <h2>Appointments: {appointment.length}</h2>
            {
                appointment.map(app => <li app={app} key={app._id}>{app.name}</li>)
            }

        </div>
    );
};

export default AppointmentsBtDate;