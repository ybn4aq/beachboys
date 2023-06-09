import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">GameHub</Link>
                <div className="collapse navbar-collapse">   
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">High Scores</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Score</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}