import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/eventDashboard/eventDashboard';
import NavBar from '../../features/nav/navBar/navBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard></EventDashboard>
        </Container>
      </div>
    );
  }
}

export default App;
