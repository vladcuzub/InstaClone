import React, { useState,useEffect } from 'react'
import profile from '../assets/profile.jpg'
import Post from '../components/Post'

import data from 'data/Data';


function Posts() {
      const [posts,setPosts] = useState(data)

  return ( <div>
    <div className='mt-1 mx-1'>
      {posts.map((post) => (
            <Post key={post.id}
                  username={post.username}
                  profilePic={post.profilePic}
                  postPhoto={post.postPhoto}
                  caption={post.caption}
            />
      ))
      }
    </div>
  
  </div>
  )
}

export default Posts;