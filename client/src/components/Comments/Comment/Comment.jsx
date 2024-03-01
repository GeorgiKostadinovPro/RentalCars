import { dateFormatter } from '../../../utilities/dateFormatter'

import './Comment.css'

export const Comment = () => {
    return (
      <div className="single-comment">
        <img
          src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
          //   src={
          //     author?.profilePictureUrl
          //       ? author?.profilePictureUrl
          //       : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
          //   }
          alt=""
        />
        <div className="comment-content">
          <h5>
            George 
            <span>Fri 25, 2021</span>
          </h5> 
          
          <p>Very nice comment</p>
        </div>
      </div>
    );
}