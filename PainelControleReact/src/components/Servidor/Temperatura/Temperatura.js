import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from '../../../util/Firebase'
import CircularProgress from '@material-ui/core/CircularProgress';

class Temperatura extends Component {
  
  constructor() {
    super();
    this.state = {
      temperarura: <CircularProgress/>
    }
  }
  
  componentDidMount() {
    const status = firebase.database().ref('temperatura/temperatura').child('celsius');
    status.on('value', (snapshot) => {
      this.setState({
        temperarura: snapshot.val()
      });
    });
  }

  renderizaStatus(){
    if (this.state.temperarura > 30 ) {
      return (
        <h1 style={{ color: '#f00', marginTop: 15, marginBottom: 15}}> {this.state.temperarura} ºC </h1>
      );
    } else if (this.state.temperarura <= 30){
      return (
          <h1 style={{ color: '#777', marginTop: 15, marginBottom: 15}}> {this.state.temperarura} ºC </h1>
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
            <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}> Temperatura </h1>
            {this.renderizaStatus()}
        </CardContent>
      </Card>
    );
  }
}

export default Temperatura;
