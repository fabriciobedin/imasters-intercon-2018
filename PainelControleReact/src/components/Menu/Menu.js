import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ServidorIcon from '@material-ui/icons/Dns';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
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
          <Link to="/sensorenergia">
                <ListItem button >
                    <ListItemIcon>
                    <ServidorIcon />
                    </ListItemIcon>
                    <ListItemText primary="Servidor" />
                </ListItem>
                </Link>

                <Link to="/signin">
                <ListItem button>
                    <ListItemIcon>
                    <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItem>
                </Link>

                <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
                </ListItem>
          </div>
          </List>
        </Drawer>
        </div>
        
    );
  }
}

export default withStyles(styles)(Menu);
