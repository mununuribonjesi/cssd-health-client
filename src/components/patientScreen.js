import React, { Component } from 'react';
import './patientScreen.css';
import {Line } from 'react-chartjs-2';

class patientScreen extends Component {
    constructor(props) {
        super(props)
        this.showAppointments = this.showAppointments.bind(this);
        this.showPatients = this.showPatients.bind(this);
        this.showView = this.showView.bind(this);
        this.state = {
            events: [],
            isView: false,
            isPatients: true,
            isAppointmentRequest: false,
       }
    }

    healthData()
    {
        var recentHealthData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Recent Health Data',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'yellow',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 20,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }

      return recentHealthData;
    }

  showAppointments (){
    
        this.setState({isPatients:false});
        this.setState({isView:false});
        this.setState({isAppointmentRequest:true});
    }

    showView(){

        this.setState({isPatients:false});
        this.setState({isAppointmentRequest:false});
        this.setState({isView:true});

    }

     showPatients ()
    {
        
        this.setState({isView:false});
        this.setState({isAppointmentRequest:false});
        this.setState({isPatients:true});

    }

    render() {

        const isAppointmentRequest = this.state.isAppointmentRequest;
        const isPatients = this.state.isPatients;
        const isView = this.state.isView;
        const recentHealthdata = this.healthData;
        const recentDataActivity = this.healthData;


 

        return (


            <div className="">

            <div className="">
        <div className="container"> 
            <div className="searchbar">
               <input type="text" class="search_input" placeholder="Search Patients"/>
      <i class="fa fa-search"></i>
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
          <td><button onClick={this.showView} class="button is-info">view</button></td>

        </tr>
      </tbody>
    </table>
    </div>}
</div>

<div>

{isView &&
<div className="columns"> 
            
            <table className="table">
      <thead>
        <tr>
          <th>NHS NO: 8674453</th>
            <th>Name: Karen B</th>
            <th>Female</th>
            <th>  <button onClick={this.showView} class="button is-warning">Export</button></th>
        </tr>
        <tr>
            <th> 
                            Recent Health Data

                            <Line
                            height={70}
  data={recentHealthdata}/>


            </th>
        </tr>
        <tr>
            <th> 
                            Recent Data Activity

                            <Line
                            height={70}
data={recentDataActivity}/>
            </th>
        </tr>

        <tr>
            <th> 
                            Appointment Requests
            </th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>

            </td>


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


