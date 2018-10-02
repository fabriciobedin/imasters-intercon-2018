import React from 'react';
import StatusEnergia from '../StatusEnergia/StatusEnergia'
import StatusServidor from '../StatusServidor/StatusServidor'

import Grid from '@material-ui/core/Grid';
import ControleServidor from '../ControleServidor/ControleServidor';
import ControleServidorTravado from '../ControleServidorTravado/ControleServidorTravado';



  function Servidor() {  
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={3}>
            <StatusEnergia />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatusServidor />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ControleServidor />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ControleServidorTravado />
          </Grid>
        </Grid>
      </div>
    );
  }
  

  export default Servidor;

