import { useEffect } from 'react'

import * as commentService from '../../services/commentService'

import './Comments.css'

export const Comments = () => {
    return (
      <div className="comments-container">
        <h3>Comments (14)</h3>
        <hr />
        <div className="post-tags">
          {/* <ul>
            {postDetails.tags &&
              postDetails.tags.map((tag, i) => (
                <li key={i}>
                  <a href="#">{tag}</a>
                </li>
              ))}
          </ul> */}
        </div>
      </div>
    );
}