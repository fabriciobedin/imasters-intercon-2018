import React from 'react';
import Grid from '@material-ui/core/Grid';
import Lamp1 from './Lamp1/Lamp1';
import Lamp2 from './Lamp2/Lamp2';
import Lamp3 from './Lamp3/Lamp3';
import Lamp4 from './Lamp4/Lamp4';
import Lamp5 from './Lamp5/Lamp5';
import Lamp6 from './Lamp6/Lamp6';
import Lamp7 from './Lamp7/Lamp7';
import Aleatorio from './Aleatorio/Aleatorio';


  function Lampadas() {  
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item style={{width: '14%'}}>
            <Lamp1 />
          </Grid>
          <Grid item style={{width: '14%'}}>
            <Lamp2 />
          </Grid>
          <Grid item style={{width: '14%'}}>
            <Lamp3 />
          </Grid>
          <Grid item style={{width: '16%'}}>
            <Lamp4 />
          </Grid>
           <Grid item style={{width: '14%'}}>
            <Lamp5 />
          </Grid>
          <Grid item style={{width: '14%'}}>
            <Lamp6 />
          </Grid>
          <Grid item style={{width: '14%'}}>
            <Lamp7 />
          </Grid>    
        </Grid>

        <Grid container spacing={24}>
          <Grid item style={{width: '100%'}}>
            <Aleatorio />
          </Grid>
        </Grid>

      </div>
    );
  }
  

  export default Lampadas;

