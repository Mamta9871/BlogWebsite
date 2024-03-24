import React from 'react';
import './Blog.css';
import Modal from './Modal';
import { useBlogContext } from './BlogContext';

const Blog = () => {
  const { displayBlog, openBlogModal, blogs } = useBlogContext();

  return (
    <div className='Container'>
      <div className='Blog'>
        <h1>Blog Website</h1>
        <button onClick={openBlogModal}>Add New Blog</button>
      </div>
      <hr />

      {displayBlog && <Modal />}

      <div className="Blogs">
        {blogs.map((blog, index) => (
          <div className="BlogItem" key={index}>
            <img className='Image' src={blog.imageUrl} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <div className="ButtonGroup">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog;
