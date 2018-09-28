import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';

class TopBar extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar >
            <Typography variant="title" color="inherit" >
              Painel de Controle React
            </Typography>
          </Toolbar>
        </AppBar>
        </div>
    );
  }
}

export default withStyles(styles)(TopBar);
