'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'

const PageId = (params:any) => {
	const {
		params: {id},
		searchParams: { personalDetails = "{\"age\":0}", userId = 0, userName = ''
		}
	} = params;

	// const { id } = useParams();
  return (
		<>
    <div>PageId {id}, userName:{userName}, userId: {userId}, personalDetails:{JSON.parse(personalDetails)?.age} </div>
		<Link href='/profile'>back to profile</Link>
		</>
  )
}

export default PageId