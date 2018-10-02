import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from '../../util/Firebase'
import ServidorOffIcon from '@material-ui/icons/HighlightOff';
import ServidorOnIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

class StatusServidor extends Component {
  
  constructor() {
    super();
    this.state = {
      statusServidor: '3',
      objetoStatusServidor: ''
    }
  }
  
  componentDidMount() {
    const status = firebase.database().ref('servidor/status').child('status');
    status.on('value', (snapshot) => {
      this.setState({
        statusServidor: snapshot.val()
      });
    });
  }

  renderizaStatus(){
    if (this.state.statusServidor == 1 ) {
      return (
        <div style={{display: 'inline-block', lineHeight: '10px'}}>
          <ServidorOnIcon  style={{fontSize: 50, color: '#00cc00'}}/>
          <h3 style={{marginLeft: '10px', float: "right", color: '#777'}}> Ligado</h3>
        </div>
      );
    } else if (this.state.statusServidor == 0){
      return (
        <div style={{display: 'inline-block', lineHeight: '10px'}}>
          <ServidorOffIcon  style={{fontSize: 50, color: '#ee0000'}}/>
          <h3 style={{marginLeft: '10px', float: "right", color: '#777'}}> Desligado</h3>
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
            <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Status do Servidor </h1>
            {this.renderizaStatus()}
        </CardContent>
      </Card>
    );
  }
}

export default StatusServidor;
