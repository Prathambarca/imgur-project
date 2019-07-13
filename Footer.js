import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';

import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { muscles } from './store';






class Footer extends Component {



  render() { 
    return ( 
       <div>
       <Paper>
         <Tabs textColor="secondarys" value={0}>
           <Tab label="All" />
         {muscles.map(group =>
        <Tab label={group}/>  
          )}
         </Tabs>
       </Paper>
           

       </div>
        );
  }
}
 
export default Footer;