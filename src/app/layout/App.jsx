import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom';
import EventDashboard from '../../features/event/eventDashboard/eventDashboard';
import NavBar from '../../features/nav/navBar/navBar';
import EventForm from '../../features/event/eventForm/EventForm';
import SettingsDashboard from '../../features/user/settings/settingsDashboard';
import EventDetailedPage from '../../features/event/eventDetailed/eventDetailedPage';
import UserDetailPage from '../../features/user/userDetailed/userDetailedPage';
import PeopleDashboard from '../../features/user/peopleDashboard/peopleDashboard';
import HomePage from '../../features/home/homePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
        <Route path="/(.+)" render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>  
                <Route path="/events" component={EventDashboard}/>
                <Route path="/event/:id" component={EventDetailedPage}/>
                <Route path="/people" component={PeopleDashboard}/>
                <Route path="/profile/:id" component={UserDetailPage}/>
                <Route path="/settings" component={SettingsDashboard}/>
                <Route path="/createEvent" component={EventForm}/>
              </Switch>
            </Container>
          </div>
        )}/>

        
        
      </div>
    );
  }
}

export default App;
