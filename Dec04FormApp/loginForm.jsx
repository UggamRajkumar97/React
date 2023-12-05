import React, { Component } from 'react'
class LoginForm extends Component {
    state={
        user:{
            userName:"",
            passWord:"",
            email:""
        }
    }
    HandleChange=(val)=>{
   const userdata={...this.state.user}
   userdata[val.currentTarget.name]=val.currentTarget.value;
   this.setState({user:userdata})

}
    HandleSubmit=(e)=>{
        e.preventDefault()
        console.log("....submitted...");
        console.log("User Name>>"+this.state.user.userName);
        console.log("passwprd>>"+this.state.user.passWord);
        console.log("Email>>"+this.state.user.email);
    }
    render() { 
        return (

        <form onSubmit={this.HandleSubmit}>
            <div className="mb-3">
                <label className="form-label">User Name</label>
                <input type="text" name="userName" className="form-control" 
                value={this.state.user.userName} onChange={this.HandleChange}/>

            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="passWord" className="form-control" 
                value={this.state.user.passWord} onChange={this.HandleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" 
                value={this.state.user.email} onChange={this.HandleChange}/>
            </div>

            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
        );
    }
}
 
export default LoginForm;