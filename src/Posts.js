import React from 'react';
import Post from './Post'

class Posts extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <Post/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;