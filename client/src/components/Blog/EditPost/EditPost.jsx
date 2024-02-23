import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import * as postService from '../../../services/postService'
import * as cloudinaryService from '../../../services/cloudinaryService'

import { Path } from '../../../utilities/Path'
import { Loading } from '../../Common/Loading'
import { Constants } from '../../../utilities/constants'

import './EditPost.css'

export const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [finishEdit, setFinishEdit] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors}
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    const getPostToEdit = async () => {
        try {
            const postToEdit = await postService.getById(postId);

            const defaultValues = {
                title: postToEdit.title,
                tags: postToEdit.tags.join(','),
                content: postToEdit.content,
                image: {
                  url: postToEdit.image.url,
                  publicId: postToEdit.image.publicId
                }
            };
            
            Object.keys(defaultValues).forEach(key => {
                setValue(key, defaultValues[key]);
            });
        } catch (error) {
            console.log(error);
        }
    };

    getPostToEdit();
  }, [postId]);

  const editPostSubmitHandler = async (data) => {
    try {
      setFinishEdit(false);

      const postObj = {
        ...data,
        tags: data.tags.split(',')
      };
      
      if (data.imageFile.length > 0) {
        const { url, publicId } = await cloudinaryService.uploadFile(data.imageFile[0], data.image.publicId);

        postObj.image = { url, publicId };
      }

      await postService.editPost(postId, postObj);

      setFinishEdit(true);

      navigate(Path.allPosts);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {!finishEdit && <Loading />}

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Edit your Post</h1>
              <span>You can manage the posts from your admin profile</span>
            </div>
          </div>
        </div>
      </div>

      <div className="edit-post-container">
        <form
          onSubmit={handleSubmit(editPostSubmitHandler)}
          encType="multipart/form-data"
        >
          <div className="input-content">
            <label htmlFor="title">Title</label>
            <input
              {...register("title", Constants.posts.title)}
              className="edit-form-input"
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
              className="edit-form-input"
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
            <label htmlFor="imageFile">
              Image{" "}
              <span className="edit-image-span">
                ( you already have an image )
              </span>
            </label>
            <input
              {...register("imageFile")}
              className="edit-form-input"
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
              className="edit-form-input"
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
          <div className="submit-edit">
            <input className="edit-btn" type="submit" value="Save" />
          </div>
        </form>
      </div>
    </>
  );
}