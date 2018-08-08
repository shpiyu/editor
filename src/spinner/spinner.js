import React, { Component } from 'react';
import './spinner.css';
export default class Spinner extends Component {
   
    render() {
        if (!this.props.show) {
            return null;
        } else {
            return (
                <div id="loadingSpinner"></div>
            )
        }
    }

}