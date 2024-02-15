import { useEffect, useState } from 'react'

import * as postService from '../../../services/postService'
import { PostRow } from './PostRow';

export const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const result =await postService.getAll();

                setPosts(result);
            } catch (error) {
                console.log(error.message);
            }
        };

        getAllPosts();
    }, []);

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
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="fa-solid fa-plus"></i>{" "}
                      <span>Add New Post</span>
                    </a>
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

        {/* <Modal
          show={carIdToDelete}
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
            <Button variant="danger" onClick={deleteCarHandler}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal> */}
      </>
    );
}