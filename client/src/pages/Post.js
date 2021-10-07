import React from 'react';
import Header from '../components/Header';
import PostForm from '../components/PostForm';
import getHeader from '../components/getHeader';

class Post extends React.Component {
    render() {
        return (
            <>
                <Header header={getHeader(this.props.match.path)}/>
                <PostForm/>
            </>
        );
    }
}

export default Post;