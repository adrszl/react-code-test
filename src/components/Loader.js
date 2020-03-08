import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                {this.props.loading ? 
                    <div className="d-flex flex-row justify-content-center">
                        <div className="lds-ripple">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                : null }
            </>
        );
    }
}

export default Loader;