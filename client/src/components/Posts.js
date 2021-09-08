import React from 'react';
import Postitem from './Postitem'

class Posts extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <Postitem/>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;