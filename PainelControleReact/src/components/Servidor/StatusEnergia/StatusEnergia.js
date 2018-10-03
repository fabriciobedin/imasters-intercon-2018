import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from '../../../util/Firebase'
import EnergiaOffIcon from '@material-ui/icons/PowerOff';
import EnergiaOnIcon from '@material-ui/icons/Power';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Divisor from '@material-ui/core/Divider/Divider'

class StatusEnergia extends Component {
  
  constructor() {
    super();
    this.state = {
      statusEnergia: '3',
    }
  }
  
  componentDidMount() {
    firebase.database().ref('sensorEnergia/status').child('status').on('value', (snapshot) => {
      this.setState({ statusEnergia: snapshot.val() });
    });
    
  }

  // horarioRetornoEnergia() {
  //   const horarioRetorno = firebase.database().ref('sensorEnergia/horario').child('horarioRetornouLuz')
  //     horarioRetorno.on('value', (snapshot) => {
  //       return( snapshot.val() );
  //     })
  // }

  // horarioFaltouEnergia() {
  //   firebase.database().ref('sensorEnergia/horario').child('horarioFaltouLuz').on('value', (snapshot) => {
  //     return( snapshot.val() );
  //   })
  // }

  renderizaStatus(){
    if (this.state.statusEnergia === 1 ) {
      return (
        <div style={{display: 'inline-block', lineHeight: '10px'}}>
          <EnergiaOnIcon  style={{fontSize: 50, color: '#00cc00'}}/>
          <h3 style={{marginLeft: '10px', float: "right", color: '#777'}}> OK</h3>
          {/* <Divisor />
          <h5 style={{marginTop: 3, marginBotton:3 }}>{this.horarioRetornoEnergia()}</h5> */}
        </div>
      );
    } else if (this.state.statusEnergia === 0){
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
      <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center'}}>
        <CardContent>
            <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Status da Energia </h1>
            {this.renderizaStatus()}
            {/* <Divisor />
          <h5 style={{marginTop: 3, marginBotton:3 }}>{this.horarioFaltouEnergia()}</h5> */}
        </CardContent>
      </Card>
    );
  }
}

export default StatusEnergia;

