// jshint esversion: 6
import React, { Fragment } from 'react';
import { Grid  , Paper } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import './Main.css';
import DoubleM from './DoubleM';


const style = {
  Paper : { padding : 20 , marginTop:10 , marginBottom: 10}
}






class Main extends React.Component {
  constructor( ){
    super();
    this.state={
      setOpen:false,
      open:false,
      setExpanded:false,
      status:false,
      cdata:[],
      edata:[]
    }
  
this.handleClickOpen=this.handleClickOpen.bind(this);
this.handleClose=this.handleClose.bind(this);
this.handleExpandClick=this.handleExpandClick.bind(this);
this.getAPI=this.getAPI.bind(this);
this.getpost=this.getpost.bind(this);
  }
  
 handleClickOpen = (event) => {
   event.preventDefault();

   this.setState({setOpen: true});
  }

   handleClose = (event) => {
    event.preventDefault();
    this.setState({setOpen: false});
}

handleExpandClick = (event) => {
  this.setState({setExpanded: true});
}

getpost = (event) => {
  event.preventDefault();
   const url = 'https://jsonplaceholder.typicode.com/posts?userId=1'
  axios.get(url)
  .then(response  => {console.log(response.data)
     this.setState({
      edata:response.data
     });
    });                                 
}



getAPI = (event) => {
  event.preventDefault();
  const url = 'https://jsonplaceholder.typicode.com/users'
  axios.get(url)
  .then(response => {console.log(response.data)
    this.setState({
      cdata:response.data
    
    });
  
  
  
  });

}

  
  render() { 
    var Cs = Array.from(this.state.cdata);
    var p =Cs.map((i) => {
    
       // console.log("--------------------------------");
       // console.log("the i is: ",i);
       return <div className="k1" ><Card onClick={this.getpost}>

       <CardMedia
   component="img"
   height="140"
   image={"https://robohash.org/"+i.name}
   alt="Image nahi disat">

</CardMedia>
       <Typography gutterBottom variant="h5" component="h2">
         {i.name}
         </Typography>

         <Typography variant="body2" color="textSecondary" component="p">
           <b>Email: </b>{i.email}
         </Typography>

         <Typography variant="body2" color="textSecondary" component="p">
           <b>Contact: </b>{i.phone}
         </Typography>

         <Typography variant="body2" color="textSecondary" component="p">
           <b>Company: </b>{i.company.name}
         </Typography>
         </Card>
         </div>
    
       });

    




    return ( 
         <div>
           <Fragment>
        <Grid container spacing={2}>
         <Grid item xs={6}>
         <Paper style={style.Paper}>
         <DoubleM edata = {this.state.edata}/>


         
           </Paper>
         
         </Grid>
         <Grid item xs={6}>
         <Paper style={style.Paper}>
             Right pane<br/>
          
         <button onClick={this.getAPI}>Hit</button>
           <div>
             {p}
           </div>
             
         </Paper>
         
         </Grid>

        </Grid>
        </Fragment>
         </div>



     );
  }
}
 
export default Main;