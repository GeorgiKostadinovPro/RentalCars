import { useEffect } from 'react'

import * as commentService from '../../services/commentService'
import { Comment } from './Comment/Comment'
import { Pagination } from '../Pagination/Pagination'

import './Comments.css'

export const Comments = () => {


  return (
    <div className="comments-container">
      <h3>Comments (14)</h3>
      <hr />

      <Comment />
      <Comment />
      <Comment />

      <br />
      <br />

      <Pagination currPage={1} totalPages={2} handlePageChange={() => {}} />
    </div>
  );
}