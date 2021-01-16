import axios from 'axios';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postAction';

const PostForm = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const post = {
            title: title,
            body: body
        };
        props.createPost(post);
    }

    return (
        <div>
            <h1> Add Post </h1>

            <form>
                <div>
                    <label> Title </label>
                    <br/>
                    <input type="text" name="title" value={title} onChange={event => setTitle(event.target.value)}/>
                </div>
                <div>
                    <label> Body </label>
                    <br/>
                    <textarea name="body" value={body} onChange={event => setBody(event.target.value)}/>
                </div>
                <button type="submit" onClick={onSubmit}> Submit </button>
            </form>
        </div>
    )
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => {
//     post: state.posts.item
// }

export default connect(null, {createPost})(PostForm);
