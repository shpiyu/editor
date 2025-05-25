import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="app-title">
                    <h1>The Editor</h1>
                    <p>your online writing companion</p>
                </div>
            </div>
        )
    }
}