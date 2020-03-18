import React from 'react'

const tabs = (props) =>  


<div className="columns is-mobile">

<div className="is-one-fifth">
  <button onClick={props.showPatients} className="button is-Dark">Patients</button>
</div>

<div className="is-one-fifth">
  <button onClick={props.showAppointments} className="button is-Dark">Appointment Requests</button>
</div>
</div>


export default tabs
