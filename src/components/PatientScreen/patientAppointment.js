import React from 'react'

const Appointments =(props) =>

<div>
{props.isAppointmentRequest &&
            <div className="columns">

              <table className="table">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Appointment Date</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Karen B. Healthy</td>
                    <td>2019/10/2020 - 15:00pm</td>
                    <td><button onClick={props.showAppointments} className="button is-large is-success">Accept </button></td>
                    <td><button onClick={props.showAppointments} className="button is-large is-danger">Decline </button></td>
                  </tr>
                </tbody>
              </table>
            </div>}
     </div>

export default Appointments