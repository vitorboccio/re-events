import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventList from '../eventList/EventList'
import { updateEvent } from '../eventActions'

const mapState = (state) => ({
    events: state.events
})

const actions = {
    updateEvent
}

class EventDashboard extends Component {
    handleDeleteEvent = (eventId) => () => {
        this.props.deleteEvent(eventId);
    }

    render() {
        const {events} = this.props; 
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList deleteEvent={this.handleDeleteEvent} events={events}/>   
                </Grid.Column>
                <Grid.Column width={6}>
    
                </Grid.Column>
            </Grid>
        )
    }
} 

export default connect(mapState, actions)(EventDashboard);