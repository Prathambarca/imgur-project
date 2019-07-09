import React,{Component} from 'react';



class Cmts extends Component{

render(){
var Cs = Array.from(this.props.cdata)
var p =Cs.map((i,k) => {

   // console.log("--------------------------------");
   // console.log("the i is: ",i);
   return <tr key={k}>


   <h4><b id="auth">{i.author} :</b></h4>


   <p id="com">{i.comment}</p>



   </tr> });
return(
<div>
   {p}

   </div>


);


}
}
export default Cmts;
