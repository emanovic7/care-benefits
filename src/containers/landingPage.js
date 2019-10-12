import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
//import CalendarTodayIcon from '@material-ui/icons';


//containers
import UserProfile from '../containers/userProfile';
import MainOptions from '../containers/mainOptions'



class LandingPage extends Component {

  constructor(){
    super();
    this.state = {

    }
  }


  render(){

    return(
      <div>
        <h3>Today is: Saturday Oct 12</h3>
        <p>The time is: 3:25 PM</p>
        <UserProfile />
        <MainOptions />
      </div>
    )
  }
}


export default LandingPage;
