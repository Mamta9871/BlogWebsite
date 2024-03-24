// Modal.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { useBlogContext } from './BlogContext';

const Modal = () => {
  const { closeBlogModal, postBlog, updateBlog, selectedBlog } = useBlogContext();
  const [blog, setBlog] = useState({ imageUrl: '', title: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedBlog) {
      setBlog(selectedBlog);
      setIsEditing(true);
    } else {
      setBlog({ imageUrl: '', title: '', description: '' });
      setIsEditing(false);
    }
  }, [selectedBlog]);

  const handleBlogChange = (field, value) => {
    setBlog({ ...blog, [field]: value });
  };

  const handleSubmit = () => {
    const { imageUrl, title, description } = blog;
    if (imageUrl.trim() !== '' && title.trim() !== "" && description.trim() !== "") {
      if (isEditing) {
        updateBlog(blog);
      } else {
        postBlog(blog);
      }
      closeBlogModal();
    }
  };

  return ReactDOM.createPortal(
    <div className="Modal-Container">
      <div className='Modal'>
        <label htmlFor="imgUrl">Image URL:</label>
        <input type="text" value={blog.imageUrl} onChange={(e) => handleBlogChange('imageUrl', e.target.value)} />
        <label htmlFor="title">Title:</label>
        <input type="text" value={blog.title} onChange={(e) => handleBlogChange('title', e.target.value)} />
        <label htmlFor="description">Blog Description:</label>
        <input type="text" value={blog.description} onChange={(e) => handleBlogChange('description', e.target.value)} />
        <div className='btn'>
          <button onClick={handleSubmit}>{isEditing ? 'UPDATE' : 'POST'} BLOG</button>
          <button onClick={closeBlogModal}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
