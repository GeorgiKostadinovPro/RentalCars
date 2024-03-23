import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import * as postService from '../../../services/postService'

import { Path } from '../../../utilities/Path'
import { PostRow } from './PostRow'

export const ManagePosts = () => {
    const [posts, setPosts] = useState([]);
    const [postIdToDelete, setPostIdToDelete] = useState(null);

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const result =await postService.getForAdmin();

                setPosts(result);
            } catch (error) {
                console.log(error.message);
            }
        };

        getAllPosts();
    }, []);

    const setPostIdToDeleteHandler = (id) => {
        if (id) {
            setPostIdToDelete(id);
        }
    }

    const handleClose = () => {
        setPostIdToDelete(null);
    }

    const deletePostHandler = async () => {
        try {
            await postService.deletePost(postIdToDelete);

            setPosts(posts => posts.filter(p => p._id !== postIdToDelete));

            setPostIdToDelete(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>All Posts</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <Link
                      to={Path.createPost}
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="fa-solid fa-plus"></i>{" "}
                      <span>Add New Post</span>
                    </Link>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Created On</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts && posts.length > 0 ? (
                    posts.map((post, i) => (
                      <PostRow
                        key={post._id}
                        index={i + 1}
                        post={post}
                        setPostIdToDeleteHandler={setPostIdToDeleteHandler}
                      />
                    ))
                  ) : (
                    <tr className="no-data-yet-p">
                      <td>No posts added yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Modal
          show={postIdToDelete}
          onHide={handleClose}
          style={{ marginTop: "100px" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>This action cannot be undone.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={deletePostHandler}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}