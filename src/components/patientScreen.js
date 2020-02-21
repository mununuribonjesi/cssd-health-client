import React, { Component } from 'react';
import './patientScreen.css'


class patientScreen extends Component {
    constructor(props) {
        super(props)

        this.showAppointments = this.showAppointments.bind(this);
        this.showPatients = this.showPatients.bind(this);

        this.state = {
            events: [],
            isView: false,
            isPatients: true,
            isAppointmentRequest: false
       }



    }



     showAppointments (){
    
        this.setState({isPatients:false});
        this.setState({isAppointmentRequest:true});
    }

     showPatients ()
    {
        this.setState({isAppointmentRequest:false});          
        this.setState({isPatients:true});

    }

    render() {

        const isAppointmentRequest = this.state.isAppointmentRequest;
        const isPatients = this.state.isPatients;



        return (


            <div className="">

            <div className="">
        <div className="container"> 
            <div className="searchbar">
               <input type="text" class="search_input" placeholder="Search Patients"/>
               <a href="#" className="search_icon"><i class="fa fa-search"></i></a>
            </div>     
            </div>

            <div className = "columns">
                <div className="is-one-fifth">
                <button onClick={this.showPatients} className="button is-Dark">Patients</button>
                </div>

                <div className="is-one-fifth">
                <button onClick={this.showAppointments} className="button is-Dark">Appointment Requests</button>
                </div>
            </div>


            <div>
    {isAppointmentRequest &&
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
<td><button onClick={this.showAppointments} className="button is-success">Accept </button></td>
<td><button onClick={this.showAppointments} className="button is-danger">Decline </button></td>
</tr>
</tbody>
</table>
    </div>}
</div>





<div>

{isPatients &&
<div className="columns"> 
            
            <table className="table">
      <thead>
        <tr>
          <th>Patient Name</th>
            <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Karen B</td>
          <td><button onClick='toggleView()' class="button is-info">view</button></td>

        </tr>
      </tbody>
    </table>
    </div>}
</div>

</div>
</div>

        );
    }
}

export default patientScreen;


