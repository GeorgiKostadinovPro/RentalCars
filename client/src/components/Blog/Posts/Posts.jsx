import { useEffect, useState } from 'react'

import * as postService from '../../../services/postService'
import { Post } from './Post'
import { Pagination } from '../../Pagination/Pagination'
import { Constants } from '../../../utilities/constants'

import './Posts.css'

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const skip = (currPage - 1) * Constants.pagination.postsPageSize;
        const take = Constants.pagination.postsPageSize;

        const result = await postService.getAll(skip, take);
        
        setPosts(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    getAllPosts();
  }, []);

  useEffect(() => {
    const getTotalSize = async () => {

    };

    getTotalSize();
  });

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrPage(newPage);
    }
  };

  return (
    <div className="col-md-8">
      <section className="tabs-content">
        {(posts && posts.length > 0) && posts.map((post) => (
          <Post key={post._id} {...post}/>
        ))}

        <Pagination
          currPage={currPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </section>
    </div>
  );
}