import React from 'react'

const search = (props) =>  

     <div className="columns is-centered">
     <input onChange={props.handleChange} value={props.query} name="query" placeholder="Search Patients" />
   </div>

export default search