import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import Servidor from '../Servidor/Servidor';
import Lampadas from '../Lampadas/Lampadas';
import {Graficos} from '../Graficos/Graficos';
import {Ocarina} from '../Ocarina/Ocarina';
import SignIn from '../SignIn/SignIn';

import { Route } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <div className={classes.appBarSpacer} />

        <Route path="/" exact component={Servidor}/>
        <Route path="/servidor" component={Servidor}/>
        <Route path="/lampadas" component={Lampadas}/>
        <Route path="/graficos" component={Graficos}/>
        <Route path="/ocarina" component={Ocarina}/>
        <Route path="/signin" component={SignIn}/>
      </main>
    );
  }
}

export default withStyles(styles)(Dashboard);