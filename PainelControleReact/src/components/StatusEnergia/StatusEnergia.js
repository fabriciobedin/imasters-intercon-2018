import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from '../../util/Firebase'
import ServidorIcon from '@material-ui/icons/Dns';
import EnergiaOffIcon from '@material-ui/icons/PowerOff';
import EnergiaOnIcon from '@material-ui/icons/Power';

import ServidorOffIcon from '@material-ui/icons/HighlightOff';
import ServidorOnIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';




class StatusEnergia extends Component {
  
  constructor() {
    super();
    this.state = {
      statusEnergia: '3',
    }
  }
  
  componentDidMount() {
    const status = firebase.database().ref('sensorEnergia/status').child('status');
    status.on('value', (snapshot) => {
      this.setState({
        statusEnergia: snapshot.val()
      });
    });
  }

  renderizaStatus(){
    if (this.state.statusEnergia == 1 ) {
      return (
        <div style={{display: 'inline-block', lineHeight: '10px'}}>
          <EnergiaOnIcon  style={{fontSize: 50, color: '#00cc00'}}/>
          <h3 style={{marginLeft: '10px', float: "right", color: '#777'}}> OK</h3>
        </div>
      );
    } else if (this.state.statusEnergia == 0){
      return (
        <div style={{display: 'inline-block', lineHeight: '10px'}}>
          <EnergiaOffIcon  style={{fontSize: 50, color: '#ee0000'}}/>
          <h3 style={{marginLeft: '10px', float: "right", color: '#777'}}> Sem luz</h3>
        </div>
      );
    } else{
      return(
      <CircularProgress/>
      );
    }
  }

  render() {
    return (
      <Card style={{ backgroundColor: '#eee', marginTop: 20, textAlign:'center'}}>
        <CardContent>
            <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Status da Energia </h1>
            {this.renderizaStatus()}
        </CardContent>
      </Card>
    );
  }
}

export default StatusEnergia;

