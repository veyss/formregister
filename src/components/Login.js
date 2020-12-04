import React, { Component } from 'react'
import axios from "axios"
import {NavLink } from "react-router-dom"
export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    Onchange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
    OnLogIn = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/auth/login", this.state)
            .then(response => {
                this.setState({
                    email: "",
                    password: ""
                })
               
                localStorage.setItem("token", response.data.token)
              
            })
           
    }

    render() {
        return (
    <div className="wrapper fadeInDown">
  <div id="formContent">
    {/* Tabs Titles */}
    <h2 ><NavLink activeClassName="active" exact to="/login"> Sign In</NavLink> </h2>
    <h2 ><NavLink activeClassName="active" exact to="/signup"> Sign Up </NavLink></h2>
    {/* Icon */}
    <div className="fadeIn first m-2">
    <i className="far fa-user fa-2x"></i>
    </div>
    {/* Login Form */}
    <form>
      <input type="email" className="fadeIn second" placeholder="email" 
       name="email" value={this.state.email} onChange={this.Onchange} />
      <input type="password"  className="fadeIn third" placeholder="password"
        name="password" value={this.state.password} onChange={this.Onchange}  />
      <input type="submit" className="fadeIn fourth"  onClick={this.OnLogIn}  />
    </form>
    {/* Remind Passowrd */}
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>
  </div>
</div>

           
        )
    }
}
