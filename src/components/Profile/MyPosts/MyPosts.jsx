import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { Required, MaxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

        let onAddPost = (values) => {
            props.addPost(values.NewPostBody);
        }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength50 = MaxLengthCreator(50)

const AddPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="NewPostBody" 
                placeholder="new Post" validate={[Required, maxLength50]} />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddPostRedux = reduxForm({form: "addPostForm"})(AddPostsForm);


export default MyPosts;