import React from 'react'

const Patients =(props) =>

<div>

{props.isPatients &&
            <div className="columns">

              <table className="table">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th> <button class="button is-primary is-large">Register </button> </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.users.length>0?
                    props.users.map(user =>
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td><button onClick={() => props.showView(user._id, user.name)} class="button is-primary is-large">view</button></td>
                      </tr>
                    ): null
                  }
                </tbody>
              </table>
            </div>}
     </div>

export default Patients