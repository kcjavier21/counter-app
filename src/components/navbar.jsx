import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        const { totalCounters } = this.props;
        console.log('NavBar - Rendered');
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
                </a>
            </nav>
        );
    }
}
