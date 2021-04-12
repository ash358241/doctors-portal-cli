import React from 'react';
import { useForm } from "react-hook-form";

import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')



const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {

    const { register, handleSubmit,formState,errors} = useForm();
  const onSubmit = data => {
      data.service = appointmentOn;
      data.date = date;
      data.created = new Date();
      fetch('http://localhost:5000/addAppointment', {
          method : 'POST',
          headers : {'content-type': 'application/json'},
          body : JSON.stringify(data)
      })
      .then(res => res.json())
      .then(success => {
          if(success){
              closeModal();
              alert('appointment created successfully');
          }
      })
      closeModal();
  }

    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 >{appointmentOn}</h2>
          <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
          <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input defaultValue="test" {...register("example")} /> */}
      <div className="form-group">
                        <input {...register("name")} type="text" name="name" placeholder="Your Name" className="form-control" />
                        

                    </div>
      <br/>
      <div className="form-group">
                        <input {...register("phone")} type="text" name="phone" placeholder="Phone Number" className="form-control" />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input {...register("email")} type="text" name="email" placeholder="Email" className="form-control" />
                    </div>
                    <br/>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>

                        </div>
                        <div className="col-4">
                            <input {...register("age")} className="form-control" name="age" placeholder="Your Age" type="number" />
                        </div>
                        <div className="col-4">
                            <input {...register("weight")} className="form-control" name="weight" placeholder="Weight" type="number" />
                        </div>
                    </div>
                        <br/>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-success">Send</button>
                    </div>
    </form>
        </Modal>
        </div>
    );
};

export default AppointmentForm;