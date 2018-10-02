import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import firebase from '../../util/Firebase'
import EnergiaOffIcon from '@material-ui/icons/PowerOff';
import EnergiaOnIcon from '@material-ui/icons/Power';
import Icon from '@material-ui/core/Icon';
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



import CircularProgress from '@material-ui/core/CircularProgress';
class ControleServidor extends Component {
  
    constructor() {
    super();
    this.state = {
        statusServidor: '3',
        corCard: '#eee',
        renderBotao: '',
        estiloCard: 1,
        botaoConfirmacao: false
    }
    this.botaoDesligar = this.botaoDesligar.bind(this);
    }

  
    componentDidMount() {
        const status = firebase.database().ref('servidor/status').child('status');
        status.on('value', (snapshot) => {
            this.setState({
            statusServidor: snapshot.val()
            });
        });
    }

    botaoDesligar (){
        const status = firebase.database().ref('servidor/status').child('status');
        status.on('value', (snapshot) => {
            this.setState({
            statusServidor: snapshot.val()
            });
        });
    };

    estiloCardPadrao = () => {
        this.setState({ estiloCard: 1 });
    };

    estiloCardTeste = () => {
        this.setState({ estiloCard: 99 });
    }

    renderizaRetorno(){
        if(this.state.estiloCard == 99){
            return(
                <Card style={{ backgroundColor: '#f00', marginTop: 20, textAlign:'center'}}>
                <CardContent>
                    <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center', color: '#fff'}}>Desligar Servidor?</h1>
                    <Button style={{width: '46%', lineHeight: '10px', marginTop: '6px',  backgroundColor: '#f55', marginRight: '20px'}} variant="extendedFab" onClick={this.estiloCardPadrao}>
                        <h3 style={{ color: '#fff'}}>Cancelar</h3>
                    </Button>
                    <Button style={{width: '46%', lineHeight: '10px', marginTop: '6px', backgroundColor: '#c00'}} variant="extendedFab" onClick={this.botaoDesligar}>
                        <h3 style={{ color: '#fff'}}>Desligar</h3>
                    </Button>
                </CardContent>
                </Card>
            );            
        } else{
            return(
                <Card style={{ backgroundColor: '#ccc', marginTop: 20, textAlign:'center'}}>
                    <CardContent>
                        <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Controle do Servidor</h1>
                        {this.renderizaStatus()}
                    </CardContent>
                </Card>
            );
        }
    }

    renderizaStatus(){
    if (this.state.statusServidor == 1 ) {
        return (
        <Button style={{width: '100%', lineHeight: '10px', marginTop: '6px', backgroundColor: '#ee0000'}} variant="extendedFab" onClick={this.estiloCardTeste}>
            <PowerIcon  style={{fontSize: 45, color: '#fff'}}/>
            <h2 style={{marginLeft: '10px', color: '#fff'}}>Desligar</h2>
        </Button>
        );
    } else if (this.state.statusServidor == 0){
        return (
        <Button style={{width: '100%', lineHeight: '10px', marginTop: '6px', backgroundColor: '#00cc00'}} variant="extendedFab" >
            <PowerIcon  style={{fontSize: 45, color: '#fff'}}/>
            <h2 style={{marginLeft: '10px', color: '#fff'}}>Ligar</h2>
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

export default ControleServidor;

