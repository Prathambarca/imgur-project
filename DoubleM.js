import React, { Component } from 'react';


class DoubleM  extends Component {
    var Cs = Array.from(this.props.edata);
var p =Cs.map((i) => {

   // console.log("--------------------------------");
   // console.log("the i is: ",i);
   return <div>


   <h4><b id="auth">{i.id} :</b></h4>


   {/* <p id="com">{i.comment}</p> */}

   </div>

   });
    render() { 
        return ( 
          <div>
            {p}
           </div>
         );
    }
}
 
export default DoubleM ;