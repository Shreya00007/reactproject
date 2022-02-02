import React from 'react';
 class form extends React.Component{
    constructor()
    {
        super()
        this.state={
            user:null,
            password:null
        }
    }
    render()
    {
        return(
            <div>
            <h1>Form Handling</h1>
            <input
             type="text"
             name="user"
             onChange={(e)=>{this.setState({user:e.target.value})}}
             />
            <br/><br/>
            <input
             type="password"
             name="password"
             onChange={(e)=>{this.setState({password:e.target.value})}}
             
             />
            <br/><br/>
           <button>Submit</button>
            </div>
        )
    }
}
 export default form;