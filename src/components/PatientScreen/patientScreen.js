 import React, { Component } from 'react';
import './patientScreen.css';
import { Line, HorizontalBar } from 'react-chartjs-2';
import axios from 'axios';
import Patients from './patients';
import Search from '../Search/search';
import Tabs from '../Tabs/tabs';
import Appointments from '../PatientScreen/patientAppointment'
import Moment from 'react-moment';

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
      heartRate: [],
      walkingData: [],
      users: [],
      query: null,
      returned:[],
      username: '',
      userId: '',
      userAlerts:[]
    }
    this.healthData = this.healthData.bind(this);
    this.activityData = this.activityData.bind(this);
    this.showView = this.showView.bind(this);
  }

  async componentDidMount() {
  }

  async getHeartRate(userId) {

    const token = localStorage.getItem('token')

    var today = new Date();
    today.setDate(today.getDate() - 14);

    var range = today.toISOString();
    const response = await axios.get(`https://shu-helth-uat.azurewebsites.net/api/measurement?metrics=Heart Rate&userId=${userId}&fromDate=${range}`, {


      headers:
      {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200) {

      this.setState({ heartRate: response.data })
    }
  }


  async getWalkingData(userId) {

    const token = localStorage.getItem('token');

    var today = new Date();
    today.setDate(today.getDate() -14);
                    
    var range = today.toISOString();         

    const response = await axios.get(`https://shu-helth-uat.azurewebsites.net/api/measurement?metrics=Walking&userId=${userId}&fromDate=${range}`, {

      headers:
      {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200) 
    {

        this.setState({ walkingData: response.data });
    }

  }


  async getUsers() {
    const token = localStorage.getItem('token');

    const response = await axios.get('https://shu-helth-uat.azurewebsites.net/api/users', {

      headers:
      {
        'Authorization': `Bearer ${token}`
      }


    });

    if (response.status === 200) {
      const users = [];
      users.push(response.data);
      this.setState({ users: users });
    }
  }

  activityData() {

    var labels = [];
    var data = [];

    for (var i = 0; i < this.state.walkingData.length; i++) {
      var formatDate = require('dateformat');
      var date = new Date(this.state.walkingData[i].recordedAt);
      labels.push(formatDate(date, "dddd, mmmm dS,yyyy"));
      data.push(this.state.walkingData[i].recorded);
    }

    var recentDataActivity = {

      labels: labels,
      datasets: [
        {
          label: 'Walking',
          backgroundColor: '#0149D7',
          borderColor: 'rgba(255,255,255)',
          borderWidth: 1,
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: data
        }
      ]
    }
    return recentDataActivity;
  }

  healthData() {

    var labels = [];
    var data = [];

    for (var i = 0; i < this.state.heartRate.length; i++) {
      var formatDate = require('dateformat');
      var date = new Date(this.state.heartRate[i].recordedAt);
      labels.push(formatDate(date, "dddd, mmmm dS,yyyy"));
      data.push(this.state.heartRate[i].recorded);
    }

    var recentHealthData = {

      labels: labels,
      datasets: [
        {
          label: 'Heart Rate',
          backgroundColor: '#0149D7',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: data
        }
      ]
    }

    return recentHealthData;
  }
  showAppointments() {

    this.setState({ isPatients: false });
    this.setState({ isView: false });
    this.setState({ isAppointmentRequest: true });
  }

  async showView(userId, username,userAlerts) {

    await this.getHeartRate(userId);
    await this.getWalkingData(userId);


    this.setState({ isPatients: false, isAppointmentRequest: false, isView: true, username: username, userId: userId,userAlerts: userAlerts}
    );
  }

  showPatients() {

    this.setState({ isView: false });
    this.setState({ isAppointmentRequest: false });
    this.setState({ isPatients: true });
  }

  handleChange = (e) => {

    const query = e.target.value;
    this.setState({ query: query }, () => this.getSearchResults(query));

  };

  async getSearchResults(query) {

    const token = localStorage.getItem('token');

    const response = await axios.get(`https://shu-helth-uat.azurewebsites.net/api/users?username=${query}`, {

      headers:
      {
        'Authorization': `Bearer ${token}`
      }


    });

    if (response.status === 200) {

      this.setState({ returned: response.data });
    }

  }

  render() {

    const isAppointmentRequest = this.state.isAppointmentRequest;
    const isPatients = this.state.isPatients;
    const isView = this.state.isView;
    const recentHealthData = this.healthData;
    const recentDataActivity = this.activityData;
    const users = this.state.returned;
    const username = this.state.username;
    const userId = this.state.userId;

    return (


      <div className="container-fluid">
          <Search
            handleChange = {this.handleChange}
            query = {this.state.query}>
          </Search>
   
      <Tabs
       showPatients = {this.showPatients}
       showAppointments = {this.showAppointments} >
      </Tabs>

        <div>
      <Appointments
      isAppointmentRequest = {isAppointmentRequest}
      showAppointments = {this.showAppointments}>
      </Appointments>
        </div>
      <Patients
      showView={this.showView}
      isPatients={isPatients}
      users={users}
      alerts={Response}
      >
      
      </Patients>

{isView &&
  <div className="columns">

    <table className="table">
      <thead>
        <tr>
          <th>NHS NO: {userId}</th>
          <th>Name: {username}</th>
          <th>  <button onClick={this.showView} class="button is-warning is-large">Export</button></th>
          <th></th>
        </tr>
        <tr>
          <th>
            Recent Health Data

            <Line
        height={250}
        data={recentHealthData} />

          </th>
        </tr>
        <tr>
          <th>
            Recent Data Activity

            <HorizontalBar
                        height={250}
                        data={recentDataActivity} />

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
       
          <td>{username}</td>
          <td>2019/10/2020 - 15:00pm</td>
          <td><button onClick={this.showAppointments} className="button is-large is-success">Accept </button></td>
          <td><button onClick={this.showAppointments} className="button is-large is-danger">Decline </button></td>
        </tr>
      </tbody>
      <th>
            Alerts
  </th>
      <tr>

  <th>Message</th>
  <th>Date</th>
        </tr>
      <tbody>
        

       { this.state.userAlerts > 0 ?
         this.state.userAlerts.map(alert =>
          <tr key ={alert.measurement._id}>
          <td>{alert.message}</td>
          <td><Moment format="YYYY/MM/DD">{alert.measurement.recordedAt}</Moment></td>
          </tr>
         ):null
       }
    
      </tbody>
    </table>

  </div>
  }

</div>

    );
  }
}

export default patientScreen;

