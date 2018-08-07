import React, { Component } from 'react';
import './posts.css';

export default class Post extends Component {

    render() {
        return (
            <div className="post">
                <p className="postDesc" onClick={() => this.props.handleClick(this.props.id)}>{this.props.title || "This is a dummy post description"}</p>
                <span> <i className="fas fa-trash-alt deletePostBtn" onClick={() => this.props.handleDelete(this.props.id)}></i> </span>
            </div>
        )
    }
}