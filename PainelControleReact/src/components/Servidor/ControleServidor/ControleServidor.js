import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import firebase from '../../../util/Firebase'
import PowerIcon from '@material-ui/icons/PowerSettingsNew';
import CircularProgress from '@material-ui/core/CircularProgress';

class ControleServidor extends Component {
  
    constructor() {
        super();
        this.state = {
            statusServidor: '3',
            estiloCard: 50,
        }
        this.botaoDesligar = this.botaoDesligar.bind(this);
        this.botaoLigar = this.botaoLigar.bind(this);

    }

    componentDidMount() {
        const status = firebase.database().ref('servidor/status').child('status');
        status.on('value', (snapshot) => {
            this.setState({
                statusServidor: snapshot.val(),
                estiloCard : 50

            });
        });
    }

    botaoDesligar (){
        const controle = firebase.database().ref('servidor/controle');
        controle.set({ controle : 1 })
        this.setState({ estiloCard : 2 })
    };

    botaoLigar (){
        const controle = firebase.database().ref('servidor/controle');
        controle.set({ controle : 1 })
        this.setState({ estiloCard : 3 })
    };

    estiloCardPadrao = () => {
        this.setState({ estiloCard: 50 });
    };

    estiloCardTeste = () => {
        this.setState({ estiloCard: 1 });
    }

    renderizaRetorno(){
        
        switch( this.state.estiloCard ) {
            case 1: {
                return(
                    <Card style={{ backgroundColor: '#f00', marginTop: 10, marginBotton: 10, textAlign:'center'}}>
                    <CardContent>
                        <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center', color: '#fff'}}>Desligar o Servidor?</h1>
                        <Button style={{width: '40%', lineHeight: '10px', marginTop: '6px',  backgroundColor: '#f55', marginRight: '20px'}} variant="extendedFab" onClick={this.estiloCardPadrao}>
                            <h3 style={{ color: '#fff'}}>Não</h3>
                        </Button>
                        <Button style={{width: '40%', lineHeight: '10px', marginTop: '6px', backgroundColor: '#c00'}} variant="extendedFab" onClick={this.botaoDesligar}>
                            <h3 style={{ color: '#fff'}}>Sim</h3>
                        </Button>
                    </CardContent>
                    </Card>
                );           
            }
            case 2: {
                return(
                    <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center'}}>
                    <CardContent>
                        <h2 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Aguarde, desligando o servidor...</h2>
                        <CircularProgress style={{lineHeight: '10px', marginTop: '10px', color: '#c00'}} onClick={this.estiloCardPadrao}  />
                    </CardContent>
                    </Card>
                );           
            }
            case 3: {
                return(
                    <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center'}}>
                    <CardContent>
                        <h2 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Aguarde, ligando o servidor...</h2>
                        <CircularProgress style={{lineHeight: '10px', marginTop: '10px', color: '#c00'}} onClick={this.estiloCardPadrao}  />
                    </CardContent>
                    </Card>
                );           
            }

            default: {
                return(
                    <Card style={{ backgroundColor: '#eee', marginTop: 10, marginBotton: 10, textAlign:'center'}}>
                        <CardContent>
                            <h1 style={{marginTop: 5, fontSize: 20, textAlign: 'center'}}>Controle do Servidor</h1>
                            {this.renderizaStatus()}
                        </CardContent>
                    </Card>
                );

            }
            
        }
    }

    renderizaStatus(){
    if (this.state.statusServidor === 1 ) {
        return (
        <Button style={{width: '100%', lineHeight: '10px', marginTop: '6px', backgroundColor: '#ee0000'}} variant="extendedFab" onClick={this.estiloCardTeste}>
            <PowerIcon  style={{fontSize: 40, color: '#fff'}}/>
            <h3 style={{marginLeft: '7px', color: '#fff'}}>Desligar</h3>
        </Button>
        );
        } else if (this.state.statusServidor === 0){
            return (
            <Button style={{width: '100%', lineHeight: '10px', marginTop: '6px', backgroundColor: '#00cc00'}} variant="extendedFab" onClick={this.botaoLigar} >
                <PowerIcon  style={{fontSize: 40, color: '#fff'}}/>
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

export default ControleServidor;

