import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import {SensorEnergia} from '../SensorEnergia/SensorEnergia';
import SignIn from '../SignIn/SignIn';

import { Route } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <div className={classes.appBarSpacer} />
        
        <Route path="/sensorenergia" component={SensorEnergia}/>
        <Route path="/signin" component={SignIn}/>
      </main>
    );
  }
}

export default withStyles(styles)(Dashboard);