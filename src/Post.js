import React from 'react';

export default function Post(props) {
    return (
        <div className="post-preview">
            <a href="/post/somePost">
                <h2 className="post-title">post title</h2>
                <h3 className="post-subtitle">post subtitle</h3>
            </a>
            <p className="post-meta">Posted by
                <a href="/">username</a>
                 on blogposts[i].datePosted.toDateString()
            </p>
        </div>
    );
}