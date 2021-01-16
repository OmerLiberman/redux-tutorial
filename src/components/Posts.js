import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';


const Posts = (props) => {
    useEffect(() => {
        if (props.posts.length === 0) {
            props.fetchPosts();
        }
        if (props.newPost.title) {
            console.log(props.newPost);
            props.posts.push({...props.newPost});
        }
    });

    return (
        <div>
            <h1> Posts </h1>
            
            {
                (props.posts && props.posts.length > 0) ?
                    props.posts.map((post) => (
                        <div key={post.id}>
                            <div> <b> id: {post.id} </b> </div>
                            <p> {post.body} </p>
                        </div>
                    ))
                : ''
            }
        </div>
    )
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,  // < state.posts > defined at the root reducer.
    newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts})(Posts);
