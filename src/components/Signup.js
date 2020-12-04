import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import axios from "axios"
export default class signUp extends Component {
    state = {
        name: "",
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
    OnSignUp = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post("http://localhost:5000/api/auth/register", this.state)
            .then(response => {
                this.setState({
                    name: "",
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
                    <input type="text"  className="fadeIn second"  placeholder="name"
                            name="name" value={this.state.name} onChange={this.Onchange} />
                        <input type="email"  className="fadeIn second" placeholder="email"
                            name="email" value={this.state.email} onChange={this.Onchange} />
                        <input type="password" className="fadeIn third" placeholder="password"
                            name="password" value={this.state.password} onChange={this.Onchange} />
                        <input type="submit" className="fadeIn fourth" onClick= {this.OnSignUp} />
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
