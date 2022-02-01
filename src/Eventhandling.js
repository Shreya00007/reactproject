import React from "react";
 export default class Eventhandling extends React.Component
 {
     testFun()
     {
         alert("testFun")
     }
     render()
     {
         return(
             <div>
             <h1>Event Handling</h1>
             <button onClick={()=>this.testFun()}>Click me</button>
             </div>
         )
     }
 }
