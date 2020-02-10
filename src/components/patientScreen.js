import React, { Component } from 'react';
import './patientScreen.css'

class patientScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: []
        }

  

    }

    render() {
        const { events } = this.state;

        console.log(events);


        return (

        <div className="container"> 
            <div class="searchbar">
               <input type="text" class="search_input" placeholder="Search Patients"/>
               <a href="#" className="search_icon"><i class="fa fa-search"></i></a>
            </div>
            
            </div>

        );
    }
}

export default patientScreen;


