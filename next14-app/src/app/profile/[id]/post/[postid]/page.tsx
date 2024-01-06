'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const PostId = (params:any) => {
	//http://localhost:3000/profile/123/post/456?islogin=true
	// const {id, postid} = useParams();
  return (
    <div>ProfileId: {params.params.id}, PostId: {params.params.postid}, search: {params.searchParams.islogin}</div>
  )
}

export default PostId