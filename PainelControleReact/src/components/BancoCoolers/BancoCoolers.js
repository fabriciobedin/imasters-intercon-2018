import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import firebase from '../../util/Firebase'
import FanIcon from '@material-ui/icons/Toys';
import CircularProgress from '@material-ui/core/CircularProgress';

class BancoCoolers extends Component {
  
    constructor() {
        super();
        this.state = {
            statusCoolers: '',
        }
        this.botaoDesligar = this.botaoDesligar.bind(this);
        this.botaoLigar = this.botaoLigar.bind(this);

    }

    componentDidMount() {
        const status = firebase.database().ref('bancoCoolers/controle').child('controle');
        status.on('value', (snapshot) => {
            this.setState({
                statusCoolers: snapshot.val()
            });
        });
    }

    botaoDesligar (){
        const controle = firebase.database().ref('bancoCoolers/controle');
        controle.set( {controle : 0})
    };

    botaoLigar (){
        const controle = firebase.database().ref('bancoCoolers/controle');
        controle.set( {controle : 1})
    };

    renderizaRetorno(){
        return(
            <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center'}}>
                <CardContent>
                    <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Banco de Coolers</h1>
                    {this.renderizaStatus()}
                </CardContent>
            </Card>
        );
    }

    renderizaStatus(){
    if (this.state.statusCoolers === 1 ) {
        return (
        <Button style={{width: '100%', lineHeight: '10px', marginTop: '6px', backgroundColor: '#ee0000'}} variant="extendedFab" onClick={this.botaoDesligar}>
            <FanIcon  style={{fontSize: 30, color: '#fff'}}/>
            <h3 style={{marginLeft: '7px', color: '#fff'}}>Desligar</h3>
        </Button>
        );
        } else if (this.state.statusCoolers === 0){
            return (
            <Button style={{width: '100%', lineHeight: '10px', marginTop: '6px', backgroundColor: '#999'}} variant="extendedFab" onClick={this.botaoLigar} >
                <FanIcon  style={{fontSize: 30, color: '#fff'}}/>
                <h3 style={{marginLeft: '7px', color: '#fff'}}>Ligar</h3>
            </Button>
            );
        } else{
            return(
            <CircularProgress/>
            );
        }
    }

    render() {
        return (        
            <div>{this.renderizaRetorno()}</div>
        );
    }
}

export default BancoCoolers;