import React from 'react'
import Blog from './Components/BlogSite/Blog'
import { BlogProvider } from './Components/BlogSite/BlogContext'

const App = () => {
  return (
    <BlogProvider>
      <Blog/>
    </BlogProvider>
  )
}

export default App