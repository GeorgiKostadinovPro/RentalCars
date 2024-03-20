import { useEffect, useState } from 'react'

import * as commentService from '../../services/commentService'

import { Constants } from '../../utilities/constants'

import { Comment } from './Comment/Comment'
import { Pagination } from '../Pagination/Pagination'

import './Comments.css'

export const Comments = ({ postId, state }) => {
  const [commentsPaginated, setCommentsPaginated] = useState([]);
  const [allCommentsCount, setAllCommentsCount] = useState(0);

  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getPostComments = async () => {
      try {
        const skip = (currPage - 1) * Constants.pagination.commentsPageSize;
        const take = Constants.pagination.commentsPageSize;

        const result = await commentService.getAllByPostId(postId, skip, take);

        setCommentsPaginated(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getPostComments();
  }, [currPage, state]);

  useEffect(() => {
    const getTotalSize = async () => {
      try {
        const count = await commentService.getCountByPostId(postId);
        
        setAllCommentsCount(count);

        setTotalPages(Math.ceil(count / Constants.pagination.commentsPageSize));
      } catch (error) {
        console.log(error.message);
      }
    }; 

    getTotalSize();
  }, [state]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrPage(newPage);
    }
  };

  return (
    <div className="comments-container">
      <h3>Comments ({allCommentsCount})</h3>
      <hr />

      {commentsPaginated && commentsPaginated.length > 0 ? (
        commentsPaginated.map((comment) => (
          <Comment key={comment._id} {...comment} />
        ))
      ) : (
        <p className="no-comments-p">No comments yet.</p>
      )}

      <br />
      <br />

      {commentsPaginated && commentsPaginated.length > 0 && (
        <Pagination
          currPage={currPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}