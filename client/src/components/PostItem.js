import React from 'react';
import {Link} from 'react-router-dom';

export default function PostItem() {
    return (
        <div className="post-preview">
            <Link to="/post">
                <h2 className="post-title">post title</h2>
                <h3 className="post-subtitle">post subtitle</h3>
            </Link>
            <p className="post-meta">Posted by
                <Link to="/">username</Link>
                 on posts[i].datePosted.toDateString()
            </p>
        </div>
    );
}