import {urls} from "../../util/urls";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {Link} from "react-router-dom";

export const TopBar = () => <AppBar position="static">
    <Toolbar>

        <IconButton color="inherit" aria-label="Menu" 
                    component={props => 
                             <Link to={urls.home.path} {...props}/>}
            >
            <MenuIcon/>
        </IconButton>

        <Typography type="title" color="inherit">
            Painel de Controle React
        </Typography>

    </Toolbar>
</AppBar>;