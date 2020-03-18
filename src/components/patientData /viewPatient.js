import React from 'react';
import { Line, Bar, HorizontalBar } from 'react-chartjs-2';
const viewPatient = (props) =>  




    

{props.isView &&
  <div className="columns">

    <table className="table">
      <thead>
        <tr>
          <th>NHS NO: {props.userId}</th>
          <th>Name: {props.username}</th>
          <th>  <button onClick={props.showView} class="button is-warning is-large">Export</button></th>
        </tr>
        <tr>
          <th>
            Recent Health Data


            <Line
        height={250}
        data={props.recentHealthData} />

           


          </th>
        </tr>
        <tr>
          <th>
            Recent Data Activity

            <HorizontalBar
                        height={250}
                        data={props.recentDataActivity} />
    
          </th>
        </tr>

        <tr>
          <th>
            Appointment Requests
  </th>
  <th></th>
  <th></th>
  <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
       
          <td>{props.username}</td>
          <td>2019/10/2020 - 15:00pm</td>
          <td><button onClick={props.showAppointments} className="button is-large is-success">Accept </button></td>
          <td><button onClick={props.showAppointments} className="button is-large is-danger">Decline </button></td>
        </tr>
      </tbody>
    </table>
  </div>}


export default viewPatient