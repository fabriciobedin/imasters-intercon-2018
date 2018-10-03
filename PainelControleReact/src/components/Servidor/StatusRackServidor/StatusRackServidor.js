import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from '../../../util/Firebase'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import CircularProgress from '@material-ui/core/CircularProgress';

class StatusRackServidor extends Component {
  
  constructor() {
    super();
    this.state = {
      statusServidor: '3'
    }
  }
  
  componentDidMount() {
    const status = firebase.database().ref('rackServidor/status').child('status');
    status.on('value', (snapshot) => {
      this.setState({
        statusServidor: snapshot.val()
      });
    });
  }

  renderizaStatus(){
    if (this.state.statusServidor === 0 ) {
      return (
        <div style={{display: 'inline-block', lineHeight: '10px'}}>
          <LockIcon style={{fontSize: 50, color: '#00cc00'}}/>
          <h3 style={{marginLeft: '10px', float: "right", color: '#777'}}> Fechado </h3>
        </div>
      );
    } else if (this.state.statusServidor === 1){
      return (
        <div style={{display: 'inline-block', lineHeight: '10px'}}>
          <LockOpenIcon style={{fontSize: 50, color: '#ee0000'}}/>
          <h3 style={{marginLeft: '10px', float: "right", color: '#777'}}> Aberto</h3>
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
      <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center'}}>
        <CardContent>
            <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Status do Rack</h1>
            {this.renderizaStatus()}
        </CardContent>
      </Card>
    );
  }
}

export default StatusRackServidor;
