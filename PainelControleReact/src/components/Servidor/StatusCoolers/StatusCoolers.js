import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from '../../../util/Firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import FanIcon from '@material-ui/icons/Toys';
import './StatusCoolers.css';


class StatusCoolers extends Component {
  
  constructor() {
    super();
    this.state = {
      statusCoolers: '3'
    }
  }
  
  componentDidMount() {
    const status = firebase.database().ref('bancoCoolers/controle').child('controle');
    status.on('value', (snapshot) => {
      this.setState({
        statusCoolers: snapshot.val()
      });
    });
  }

  renderizaStatus(){
    if (this.state.statusCoolers === 1 ) {
      return (
        <div style={{display: 'inline-block', lineHeight: '10px'}}>
          <FanIcon  className="App-logo" style={{fontSize: 50, color: '#00cc00'}}/>
          <h3 style={{marginLeft: '10px', float: "right", color: '#777'}}> Ligado</h3>
        </div>
      );
    } else if (this.state.statusCoolers === 0){
      return (
        <div style={{display: 'inline-block', lineHeight: '10px'}}>
          <FanIcon style={{fontSize: 50, color: '#ee0000'}}/>
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
      <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center'}}>
        <CardContent>
            <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Status do Cooler </h1>
            {this.renderizaStatus()}
        </CardContent>
      </Card>
    );
  }
}

export default StatusCoolers;
