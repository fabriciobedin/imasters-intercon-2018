import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ServidorIcon from '@material-ui/icons/Dns';
import Sensor from '@material-ui/icons/Memory';
import Grafico from '@material-ui/icons/Timeline';
import Som from '@material-ui/icons/Hearing';
import {Link } from 'react-router-dom';


const divStyle = {
  marginTop: '0px',
};

class Menu extends React.Component {

render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer variant="permanent">
            <div className={classes.toolbarSpace} />
                <List>
                    <div style={divStyle}>
                        <Link to="/servidor">
                            <ListItem button >
                                <ListItemIcon>
                                    <ServidorIcon />
                                </ListItemIcon>
                                <ListItemText primary="Servidor" />
                            </ListItem>
                        </Link>

                        <Link to="/sensores">
                            <ListItem button>
                                <ListItemIcon>
                                    <Sensor />
                                </ListItemIcon>
                                <ListItemText primary="Sensores" />
                            </ListItem>
                        </Link>

                        <Link to="/graficos">
                            <ListItem button>
                                <ListItemIcon>
                                    <Grafico />
                                </ListItemIcon>
                                <ListItemText primary="Gráficos" />
                            </ListItem>
                        </Link>

                        <Link to="/ocarina">
                            <ListItem button>
                            <ListItemIcon>
                                <Som />
                            </ListItemIcon>
                            <ListItemText primary="Ocarina" />
                            </ListItem>
                        </Link>
                    </div>
                </List>
            </Drawer>
        </div>
        
    );
  }
}

export default withStyles(styles)(Menu);
