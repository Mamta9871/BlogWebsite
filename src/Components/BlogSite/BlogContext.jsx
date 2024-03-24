import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [displayBlog, setDisplayBlog] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const openBlogModal = () => {
    setDisplayBlog(true);
  };

  const closeBlogModal = () => {
    setDisplayBlog(false);
  };

  const postBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
    setDisplayBlog(false);
  };

  return (
    <BlogContext.Provider
      value={{
        displayBlog,
        blogs,
        openBlogModal,
        closeBlogModal,
        postBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
export {useBlogContext}