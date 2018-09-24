import React from 'react'
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './eventDetailedHeader';
import EventDetailedChat from './eventDetailedChat';
import EventDetailedInfo from './eventDetailedInfo';
import EventDetailedSidebar from './eventDetailedSidebar'

const EventDetailedPage = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
}

export default EventDetailedPage
