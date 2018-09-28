import React, {Component} from 'react';
import './App.css';
import {MuiThemeProvider} from "@material-ui/core/styles/index";
import {createMuiTheme, Card, CardContent} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import {DataTable} from '../DataTable/DataTable';
import {Add} from '../Add/Add'; 
import {Welcome} from '../Welcome/Welcome';
import FirebaseService from '../../services/FirebaseService';
import {Route} from 'react-router-dom';
import {urls} from "../../util/urls";
import {TopBar} from '../TopBar/TopBar';



const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

class App extends Component {

  state = {
      data: []
  };

  componentDidMount() {
      // FirebaseService.onAuthChange(
      //     (authUser) => this.props.login(authUser),
      //     () => this.props.logout()
      // );
      FirebaseService.getDataList('leituras', (dataReceived) => this.setState({data: dataReceived}))
  }

  render() {


      return (
          <MuiThemeProvider theme={theme}>

              <React.Fragment>

                  <TopBar/>

                  <Card style={{margin: '50px'}}>
                    <CardContent>

                    <Route exact
                          path={urls.home.path}
                          render={(props) => <Welcome {...props}/>}
                    />

                    <Route exact
                          path={urls.data.path}
                          render={(props) => 
                              <DataTable {...props} data={this.state.data}/>}
                    />

                    <Route exact
                          path={urls.add.path}
                          render={(props) => 
                                    <Add {...props}/>}
                    />
                    </CardContent>
                  </Card>

              </React.Fragment>
          </MuiThemeProvider>
      );
  }
}

export default App;