import React, { Component  } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { muscles ,exercises } from './store';

class App extends Component {
  constructor(){
    super();
    this.state = {
      exercises,
      muscles
    }
    this.getEbyMusc=this.getEbyMusc.bind(this);
  }
  

  getEbyMusc(){
    return Object.entries(this.state.exercises.reduce((exercises,exercise) =>    {
      const { muscles } = exercise
        
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles],exercise] : [exercise]
        
      return exercises
    },{})
    )
  }
  
  render() { 
    console.log(this.getEbyMusc())
    return (
      <div>
         <Header/>
         <Main/>
         <Footer/>
         </div>
        );
  }
}
 
export default App;