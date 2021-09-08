import React from 'react';
import Header from './Header';
import getHeader from './getHeader';

class Post extends React.Component {
    render() {
        return (
            <>
                <Header header={getHeader(this.props.match.path)}/>
                <article>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                boop
                            </div>
                        </div>
                    </div>
                </article>
            </>
        );
    }
}

export default Post;