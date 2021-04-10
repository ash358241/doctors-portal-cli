import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <br/>
            <br/>
            <h5>{service.name}</h5>
            <br/>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, ea?</p>
        </div>
    );
};

export default ServiceDetail;