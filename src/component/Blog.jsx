import React from 'react'
import Navba from './Navba'
import Footer from "./Footer"
import Blogc from './Blogc'

const Blog = () => {
  return (
<>
<Navba/>
<div className="gap h-12"></div><div className="gap h-12"></div>
<Blogc/>
<Blogc/>
<Blogc/>
<Blogc/>
<Footer/>
</>
  )
}

export default Blog