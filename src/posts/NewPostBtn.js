import React from 'react';
import { Link } from 'react-router-dom';

export default function NewPostBtn() {
    return (
        <div className="new-post">
            <button><Link to="/editor">create a new post</Link></button>
        </div>
    )
}