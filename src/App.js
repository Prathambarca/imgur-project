import React, { Component } from 'react';
import Auth from './Auth';
import  {BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import Imgur from './Imgur';
class App extends Component {
   constructor(){
       super();
         this.state = {
            user:'',
            password:'' ,
         status:false }
            this.handleChange = this.handleChange.bind(this);
            this.handleFormSubmit = this.handleFormSubmit.bind(this);

   };


handleChange = (e) => {
   event.preventDefault();
   const input =e.target.name;
   const value =e.target.value;
   this.setState({ user: value });
   
     }


   handleFormSubmit = (e) => {
      e.preventDefault();
      const { user, password,status } = this.state;
      
      if( 'pr' === user && '123' === password){

      this.setState({status:true})
      console.log("The status is true")
      }
    };


passw = (e) => {
   event.preventDefault();
   const pw =e.target.name;
   const value =e.target.value;
   this.setState({ password: value });
   
     }


render() { 
       return (   
          <div>   
         

      {this.state.status ? (<Router><Redirect push from='/' to='/Imgur'/><Route exact strict path ='/Imgur' component={Imgur}></Route></Router>):( <form>
          <label>
        User: <input type="text" name="user" value={this.state.user} onChange={this.handleChange} />
      </label><br/>
      <label>
       Password:<input type="password" name="password" value={this.state.password} onChange={this.passw} />
       </label>
      <button type="submit" onClick={this.handleFormSubmit}>Sign In</button>
      </form>)}
      </div>
        );
   }
}

export default App;
