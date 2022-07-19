import React from 'react';
import s from './Post.module.css';
import Photo from './../../../../assets/images/Profile.jpg'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={Photo} />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;