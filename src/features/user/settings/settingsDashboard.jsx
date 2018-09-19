import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Grid,  } from 'semantic-ui-react';
import SettingsNav from './settingsNav';
import BasicPage from './basicPage';
import AboutPage from './aboutPage'
import PhotosPage from './photosPage'
import AccountPage from './accountPage'

const settingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route path="/settings/basics" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
      
    </Grid>
  )
}

export default settingsDashboard
