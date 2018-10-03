import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from '../../../util/Firebase'
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import CircularProgress from '@material-ui/core/CircularProgress';

class Lamp1 extends Component {
  
    constructor() {
        super();
        this.state = {
            status: '',
        }
        this.botaoDesligar = this.botaoDesligar.bind(this);
        this.botaoLigar = this.botaoLigar.bind(this);

    }

    componentDidMount() {
        const status = firebase.database().ref('lampadas/aleatorio').child('controle');
        status.on('value', (snapshot) => {
            this.setState({
                status: snapshot.val()
            });
        });
    }

    botaoDesligar (){
        const controle = firebase.database().ref('lampadas/aleatorio');
        controle.set( {controle : 0})
    };

    botaoLigar (){
        const controle = firebase.database().ref('lampadas/aleatorio');
        controle.set( {controle : 1})
    };

    renderizaStatus(){
    if (this.state.status === 1 ) {
        return (
            <Card style={{ backgroundColor: '#555', marginTop: 10, marginBotton: 10, textAlign:'center', height:'80px'}}  onClick={this.botaoDesligar}>
                <CardContent>
                    <PowerIcon  style={{fontSize: 50, color: '#fff'}}/>
                </CardContent>
            </Card>
        );
        } else if (this.state.status === 0){
            return (
                <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center', height:'80px'}}  onClick={this.botaoLigar}>
                    <CardContent style={{display: 'inline-block', lineHeight: '15px'}}>
                        <PowerIcon  style={{fontSize: 50, color: '#999'}}/>
                    </CardContent>
                </Card>
            );
        } else{
            return(
                <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center', height:'80px'}}  onClick={this.botaoLigar}>
                    <CardContent>
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

export default Lamp1;