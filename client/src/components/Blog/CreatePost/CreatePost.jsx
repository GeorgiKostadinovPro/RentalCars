import { useForm } from 'react-hook-form'

import './CreatePost.css'
import { Constants } from '../../../utilities/constants';

const defaultValues = {
    title: '',
    tags: '',
    content: '',
    imageUrl: ''
};

export const CreatePost = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({ defaultValues, mode: 'onChange' });

    const createPostSubmitHandler = (data) => {
        try {
            console.log('create');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
      <>
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
          <form onSubmit={handleSubmit(createPostSubmitHandler)} encType="multipart/form-data">
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
              <label htmlFor="gallery">Image</label>
              <input
                {...register("imageUrl", Constants.posts.imageUrl)}
                className="create-form-input"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
              />
              <span
                style={{
                  display: errors.imageUrl?.message ? "block" : "none",
                  color: "red",
                }}
              >
                {errors.imageUrl?.message}
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