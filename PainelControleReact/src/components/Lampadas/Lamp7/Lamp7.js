import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from '../../../util/Firebase'
import LuzIcon from '@material-ui/icons/WbIncandescent';
import CircularProgress from '@material-ui/core/CircularProgress';

class Lamp7 extends Component {
  
    constructor() {
        super();
        this.state = {
            status: '',
        }
        this.botaoDesligar = this.botaoDesligar.bind(this);
        this.botaoLigar = this.botaoLigar.bind(this);

    }

    componentDidMount() {
        const status = firebase.database().ref('lampadas/lamp7').child('controle');
        status.on('value', (snapshot) => {
            this.setState({
                status: snapshot.val()
            });
        });
    }

    botaoDesligar (){
        const controle = firebase.database().ref('lampadas/lamp7');
        controle.set( {controle : 0})
    };

    botaoLigar (){
        const controle = firebase.database().ref('lampadas/lamp7');
        controle.set( {controle : 1})
    };

    renderizaStatus(){
    if (this.state.status === 1 ) {
        return (
            <Card style={{ backgroundColor: '#0087ff', marginTop: 10, marginBotton: 10, textAlign:'center'}}  onClick={this.botaoDesligar}>
                <CardContent>
                    <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center', color: '#fff'}}>7</h1>   
                    <LuzIcon  style={{fontSize: 50, color: '#fff'}}/>
                </CardContent>
            </Card>
        );
        } else if (this.state.status === 0){
            return (
                <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center'}}  onClick={this.botaoLigar}>
                    <CardContent>
                        <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>7</h1>
                        <LuzIcon  style={{fontSize: 50, color: '#999'}}/>
                    </CardContent>
                </Card>
            );
        } else{
            return(
                <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center'}}  onClick={this.botaoLigar}>
                    <CardContent>
                        <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>7</h1>
                        <CircularProgress style={{fontSize: 50, color: '#999'}}/>
                    </CardContent>
                </Card>
            
            );
        }
    }

    render() {
        return (        
            <div>{this.renderizaStatus()}</div>
        );
    }
}

export default Lamp7;