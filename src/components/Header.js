import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <>
                {!this.props.loading ? 
                    <header className="header d-flex flex-row justify-content-center p-4">
                        <h4>Users</h4>
                    </header>
                : null }
            </>
        )
    }
}

export default Header;