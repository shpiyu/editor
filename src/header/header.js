import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="app-title">
                    <h1>Charles Butler Editor</h1>
                    <p>An online <b>WYSIWYG</b> editor</p>
                </div>
            </div>
        )
    }
}