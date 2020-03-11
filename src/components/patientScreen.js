import React, { Component } from 'react';
import './patientScreen.css';
import { Line,Bar,HorizontalBar } from 'react-chartjs-2';
import axios from 'axios';


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
      heartRate:[],
      walkingData:[],
      users:[],
      query:null,
      returned:[],
      username:'',
      userId:''
    }

    this.healthData = this.healthData.bind(this);
    this.activityData = this.activityData.bind(this);
    this.showView = this.showView.bind(this);
 
  }



  async componentDidMount()
  {
    await this.getUsers();
    await this.searchUser();

  }

  async getHeartRate(userId) {

    const token = localStorage.getItem('token')

    const response = await axios.get(`https://shu-helth-uat.azurewebsites.net/api/measurement?metrics=Heart Rate&userId=${userId}`, {


        headers:
        {
            'Authorization': `Bearer ${token}`
        }
    });

        if(response.status===200){

          this.setState({heartRate:response.data})
        }  
        
}

async walkingData(userId) {

  const token = localStorage.getItem('token');
  
  const response = await axios.get(`https://shu-helth-uat.azurewebsites.net/api/measurement?metrics=Walking&userId=${userId}`, {


      headers:
      {
          'Authorization': `Bearer ${token}`
      }
  });

      if(response.status===200){
        
        this.setState({walkingData:response.data});
      }  
}


async searchUser()
{

  const token = localStorage.getItem('token');

  const response = await axios.get(`https://shu-helth-uat.azurewebsites.net/api/users?username=${this.state.query}`,{

    headers:
    {
        'Authorization': `Bearer ${token}`
    }


  });

  if(response.status===200){

    this.setState({query:response.data});
    console.log(response.data);
  } 
}


async getUsers()
{
    const token = localStorage.getItem('token');

    const response = await axios.get('https://shu-helth-uat.azurewebsites.net/api/users',{

      headers:
      {
          'Authorization': `Bearer ${token}`
      }


    });

    if(response.status===200){
      const users = [];
      users.push(response.data);
      this.setState({users:users});
    } 
}





activityData() {

  var labels = [];
  var data = [];

  for(var i = 0; i < this.state.walkingData.length; i++)
  {
    var formatDate = require('dateformat'); 
      var date = new Date(this.state.walkingData[i].updatedAt);
      labels.push(formatDate(date,"dddd, mmmm dS,yyyy"));
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


    for(var i = 0; i < this.state.heartRate.length; i++)
    {
      var formatDate = require('dateformat'); 
      var date = new Date(this.state.heartRate[i].updatedAt);
      labels.push(formatDate(date,"dddd, mmmm dS,yyyy"));
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

  async showView(userId,username) {

    this.setState({ isPatients: false,isAppointmentRequest: false,isView: true,username:username,userId:userId}
      );

      await this.getHeartRate(userId); 
      await this.walkingData(userId);
  }

  showPatients() {

    this.setState({ isView: false });
    this.setState({ isAppointmentRequest: false });
    this.setState({ isPatients: true });

  }

  handleChange = (e) => {

    const query = e.target.value;
    this.setState({query:query},() => this.getSearchResults(query));
  };


async getSearchResults(query)
{

  const token = localStorage.getItem('token');

  const response =  await axios.get(`https://shu-helth-uat.azurewebsites.net/api/users?username=${query}`,{

    headers:
    {
        'Authorization': `Bearer ${token}`
    }


  });

  console.log(response);

  if(response.status===200){

    this.setState({returned:response.data});
    console.log(response.data);
  } 

}

  render() {

    const isAppointmentRequest = this.state.isAppointmentRequest;
    const isPatients = this.state.isPatients;
    const isView = this.state.isView;
    const recentHealthdata = this.healthData;
    const recentDataActivity = this.activityData;
    const users = this.state.returned;
    const query = this.state.query;
    const username = this.state.username;
    const userId = this.state.userId;

    console.log(query);
    console.log(this.state.returned)
    return (


      <div className="">
        <div className="columns is-centered">

            <input onChange={this.handleChange} value={this.state.query} name="query" placeholder="Search Patients" />
       
          
        </div>

        <div className="columns">
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
                    <td><button onClick={this.showAppointments} className="button is-large is-success">Accept </button></td>
                    <td><button onClick={this.showAppointments} className="button is-large is-danger">Decline </button></td>
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
                    <th> <button class="button is-primary is-large">Register </button> </th>
                  </tr>
                </thead>
                <tbody>
                { 
                users.map(user => 
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td><button onClick={() => this.showView(user._id,user.name)} class="button is-primary is-large">view</button></td>
                  </tr>
                      )
                }
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
                    <th>NHS NO: {userId}</th>
                    <th>Name: {username}</th>
                    <th>  <button onClick={this.showView} class="button is-warning is-large">Export</button></th>
                  </tr>
                  <tr>
                    <th>
                      Recent Health Data

                            <Line
                        height={70}
                        data={recentHealthdata} />


                    </th>
                  </tr>
                  <tr>
                    <th>
                      Recent Data Activity

                            <HorizontalBar
                        height={70}
                        data={recentDataActivity} />
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

    );
  }
}

export default patientScreen;


