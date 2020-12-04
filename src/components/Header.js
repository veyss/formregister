import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" activeClassName="active" exact to="/login">Login <span className="sr-only">(current)</span></NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" exact to="/signup">sigup <span className="sr-only">(current)</span></NavLink>
                        
                    </div>
                </div>
            </nav>

        )
    }
}
