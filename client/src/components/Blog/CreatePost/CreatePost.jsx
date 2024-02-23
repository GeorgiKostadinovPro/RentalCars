import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import * as postService from '../../../services/postService'
import * as cloudinaryService from '../../../services/cloudinaryService'

import { Path } from '../../../utilities/Path'
import { Constants } from '../../../utilities/constants'

import './CreatePost.css'
import { Loading } from '../../Common/Loading'

const defaultValues = {
    title: '',
    tags: '',
    content: '',
    image: ''
};

export const CreatePost = () => {
  const navigate = useNavigate();

  const [finishCreate, setFinishCreate] = useState(true);

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({ defaultValues, mode: 'onChange' });

  const createPostSubmitHandler = async (data) => {
    try {
      setFinishCreate(false);

      const { url, publicId } = await cloudinaryService.uploadFile(data.image[0]);

      const postObj = {
        ...data,
        tags: data.tags.split(','),
        image: { url, publicId }
      };

      await postService.createPost(postObj);

      setFinishCreate(true);

      navigate(Path.allPosts);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {!finishCreate && <Loading />}

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Add your Post</h1>
              <span>You can manage the posts from your admin profile</span>
            </div>
          </div>
        </div>
      </div>

      <div className="create-post-container">
        <form
          onSubmit={handleSubmit(createPostSubmitHandler)}
          encType="multipart/form-data"
        >
          <div className="input-content">
            <label htmlFor="title">Title</label>
            <input
              {...register("title", Constants.posts.title)}
              className="create-form-input"
              type="text"
              placeholder="Enter title..."
            />
            <span
              style={{
                display: errors.title?.message ? "block" : "none",
                color: "red",
              }}
            >
              {errors.title?.message}
            </span>
          </div>
          <div className="input-content">
            <label htmlFor="tags">Tags</label>
            <input
              {...register("tags", Constants.posts.tags)}
              className="create-form-input"
              type="text"
              placeholder="car,engine,fast..."
            />
            <span
              style={{
                display: errors.tags?.message ? "block" : "none",
                color: "red",
              }}
            >
              {errors.tags?.message}
            </span>
          </div>
          <div className="input-content">
            <label htmlFor="image">Image</label>
            <input
              {...register("image", Constants.posts.image)}
              className="create-form-input"
              type="file"
              accept="image/png, image/jpg, image/jpeg"
            />
            <span
              style={{
                display: errors.image?.message ? "block" : "none",
                color: "red",
              }}
            >
              {errors.image?.message}
            </span>
          </div>
          <div className="input-content">
            <label htmlFor="content">Content</label>
            <textarea
              {...register("content", Constants.posts.content)}
              className="create-form-input"
              type="text"
              placeholder="Write content..."
            />
            <span
              style={{
                display: errors.content?.message ? "block" : "none",
                color: "red",
              }}
            >
              {errors.content?.message}
            </span>
          </div>
          <div className="submit-create">
            <input className="create-btn" type="submit" value="Create" />
          </div>
        </form>
      </div>
    </>
  );
}