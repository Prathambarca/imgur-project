import React, { Component } from 'react';
import Cmts from './Cmts';

class Imgur extends Component {
   constructor(props){
    super(props);
    this.state={
      url:'',
      cmt:'',
      cdata:'',
      state:false,
      image_id:'',
      value:'',
      data:'',
      elements:{
        coment:''
      }
   
    }
    this.getImage = this.getImage.bind(this);
    this.addcomment = this.addcomment.bind(this);
   
   }
   
   getImage = (event) => {
    event.preventDefault();
    //
    var imgid = event.target.elements.imageid.value;
    console.log("https://api.imgur.com/3/image/"+imgid+"/comments")
    fetch("https://api.imgur.com/3/image/"+imgid+"/comments",{ headers:{
    Authorization: 'client-ID f502d4899f670ea'}
   
   }).then(res => {res.json().then(data => {
    this.setState({status:true})
    console.log("Res ---------->",res);
    console.log('Data------------>',data);
    console.log('Data.data------------>',data.data);
    console.log('The commments id is: ',data.data[1]);
   
    this.setState({
   
      cdata:data.data,
      image_id:imgid
   
    });
   
    console.log('The link is : ',this.state.url);
   
   })
   
   
   })
   .catch(error => {console.error('Error:', error)
   
   console.log("Errrrorrrrrrrr")
   });
   
   
   fetch("https://api.imgur.com/3/image/"+imgid,{ headers:{
   Authorization: 'client-ID f502d4899f670ea'}
   
   }).then(res => {res.json().then(data => {
    // console.log("Res ---------->",res);
    // console.log('Data------------>',data)
    // console.log('Data.data------------>',data.data)
   
    this.setState({
      url:data.data.link
   
    })
   })
   
   
   })
   
   
   
   }
   
   
   handleChange(e){
   
    e.preventDefault();
    var elements = this.state.elements;
   
   
    const Key = e.target.name;
    const values = e.target.value;
   console.log("key is ",Key)
   console.log("values is ",values)
    elements[e.target.name]=e.target.value;
   
    this.setState({
      elements
    })
   
    console.log(Key, values, 'sup')
    console.log("the input val ",elements)
   
   
   }
   
   addcomment(e){
    e.preventDefault();
   
   
   
    var commt = this.state.elements.coment;
    var imgid = this.state.image_id;
   
   
    var datas = new FormData();
    datas.append("image_id", imgid);
    datas.append("comment", commt);
   
   
    const data2 = {
      image_Id: imgid,
      comment:commt
    }
   console.log(datas,"hello")
   this.setState({
    data:datas
   });
   
   console.log(...datas,'helloworld')
   
   
   console.log("the imgid is: ",commt,"The cmt is",imgid)
   
   // this.setState({
   //   data:data
   // });
   
   // console.log(data,'hello')
   
   
   
    // const body = abc
   
    // 'content-Type': 'multipart/form-data',
    // "cache-control": "no-cache"
    //
   
    console.log("data2",data2);
    console.log(this.state.data,'helloworld')
   
    var ndata = this.state.data;
    console.log("The comment image to be added is: ",imgid);
    console.log("The comment to be added is: "+commt);
    fetch("https://api.imgur.com/3/comment",{ method: 'POST',
    headers:{
      
   
      Authorization: 'Bearer 3ebb2ccdb98d861c994bbec433e9f7ec1b3f5fb2 '
    },
      // body:(ndata)
      // body:data2
      //body:JSON.parse(data2)
      body:datas
      }).then(console.log("Comment added sucessfully"))
      .catch()
   
   }
   
   
   
   render(){
    return(
      <div>
      <center>
      <h1>Imgur </h1>
   
      <form onSubmit={this.getImage}>
      <input type="text" name="imageid"></input>
      <button >Search</button>
   
      </form>
      {this.state.status ? <div><input type="text" name="coment" value={this.state.elements.coment} onChange={(e) => {this.handleChange(e)}}></input><button onClick={(e) =>{this.addcomment(e)}}>Add comment</button></div>:null}
   
      <img src={this.state.url} height="300px"></img>
   
   
      <Cmts cdata = {this.state.cdata}/>
      </center>
          </div>
      );
    }
   }
   
   
   //{this.state.status ? <Addcmt Addcomment={this.Addcomment}/>: null}
   
   
   
   
   
   
   
   export default Imgur;



































/////////////////////////////////////////////==================================================================
/*

import React,{Component} from 'react';
import './App.css';
import Cmts from './Cmts';
// image id: QtJ914p

// cmt id : 442115587
class App extends Component
{  constructor(props){
 super(props);
 this.state={
   url:'',
   cmt:'',
   cdata:'',
   state:false,
   image_id:'',
   value:'',
   data:'',
   elements:{
     coment:''
   }

 }
 this.getImage = this.getImage.bind(this);
 this.addcomment = this.addcomment.bind(this);

}

getImage = (event) => {
 event.preventDefault();
 //
 var imgid = event.target.elements.imageid.value
 console.log("https://api.imgur.com/3/image/"+imgid+"/comments")
 fetch("https://api.imgur.com/3/image/"+imgid+"/comments",{ headers:{
 Authorization: 'client-ID aff5d534ca3ff69'}

}).then(res => {res.json().then(data => {
 this.setState({status:true})
 console.log("Res ---------->",res);
 console.log('Data------------>',data);
 console.log('Data.data------------>',data.data);
 console.log('The commments id is: ',data.data[1]);

 this.setState({

   cdata:data.data,
   image_id:imgid

 });

 console.log('The link is : ',this.state.url);

})


})
.catch(error => {console.error('Error:', error)

console.log("Errrrorrrrrrrr")
});


fetch("https://api.imgur.com/3/image/"+imgid,{ headers:{
Authorization: 'client-ID aff5d534ca3ff69'}

}).then(res => {res.json().then(data => {
 // console.log("Res ---------->",res);
 // console.log('Data------------>',data)
 // console.log('Data.data------------>',data.data)

 this.setState({
   url:data.data.link

 })
})


})



}


handleChange(e){

 e.preventDefault();
 var elements = this.state.elements;


 const Key = e.target.name;
 const values = e.target.value;
console.log("key is ",Key)
console.log("values is ",values)
 elements[e.target.name]=e.target.value;

 this.setState({
   elements
 })

 console.log(Key, values, 'sup')
 console.log("the inout val ",elements)


}

addcomment(e){
 e.preventDefault();



 var commt = this.state.elements.coment;
 var imgid = this.state.image_id;


 var datas = new FormData();
 datas.append("image_id", imgid);
 datas.append("comment", commt);


 const data2 = {
   image_Id: imgid,
   comment:commt
 }
console.log(datas,"hello")
this.setState({
 data:datas
});

console.log(...datas,'helloworld')


console.log("the imgid is: ",commt,"The cmt is",imgid)

// this.setState({
//   data:data
// });

// console.log(data,'hello')



 // const body = abc

 // 'content-Type': 'multipart/form-data',
 // "cache-control": "no-cache"
 //

 console.log("data2",data2);
 console.log(this.state.data,'helloworld')

 var ndata = this.state.data;
 console.log("The comment image to be added is: ",imgid);
 console.log("The comment to be added is: "+commt);
 fetch("https://api.imgur.com/3/comment",{ method: 'POST',
 headers:{

   Authorization: 'Bearer b0253c349dae4b8d06ec2c2a7ef15c1399d5b0a9'
 },
   // body:(ndata)
   // body:data2
   //body:JSON.parse(data2)
   body:datas
   }).then(console.log("Comment added sucessfully"))
   .catch()

}



render(){
 return(
   <div>

   <h1>Imgur </h1>

   <form onSubmit={this.getImage}>
   <input type="text" name="imageid"></input>
   <button >Search</button>

   </form>
   {this.state.status ? <div><input type="text" name="coment" value={this.state.elements.coment} onChange={(e) => {this.handleChange(e)}}></input><button onClick={(e) =>{this.addcomment(e)}}>Add cmt</button></div>:null}

   <img src={this.state.url} height="300px"></img>


   <Cmts cdata = {this.state.cdata}/>
       </div>
   );
 }
}


//{this.state.status ? <Addcmt Addcomment={this.Addcomment}/>: null}







export default App;
*/





{/*constructor(props) {
    super(props);
  this.state = { 
    status:false,
     data:'',
     cdata:'',
     url:'',
     test:[],
     ndata:''
    }
    this.getImage=this.getImage.bind(this);
  }

  getImage = (event) => {
    event.preventDefault();

    var imgid= event.target.elements.imageid.value;





    fetch("https://api.imgur.com/3/image/"+imgid+"/comments",{ headers:{
      Authorization: 'client-ID aff5d534ca3ff69'}
     
     }).then(res => {res.json().then(data => {
      this.setState({status:true})
      console.log("Res ---------->",res);
      console.log('Data------------>',data);
      console.log('Data.data------------>',data.data);
      console.log('The commments id is: ',data.data[1]);
     
      this.setState({
     
        ndata:data.data,
        image_id:imgid
     
      });
    })
  })



}
  render() {
    // console.log('url link',this.state.test);
    return (
      <div className="App">
       Imgur app
       <form onSubmit={this.getImage}>console.log("Res ---------->console.log("Res ---------->",res);
      console.log('Data------------>',data);",res);
      console.log('Data------------>',data);
         <p>ImageId</p><input type="text" name="imageid"/><br/>
         <button>Get image</button><br/>
         <img src={this.state.url} alt="" height="250px" width="250px"></img> 
       </form>
     <h1>  {this.state.ndata.map((prop, key) => {
         <p key={key}>{prop}</p>
       })}</h1>
      </div>

    );
  }
}

export default App; */}