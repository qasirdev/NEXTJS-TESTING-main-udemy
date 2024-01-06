'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Profile = () => {
	const router = useRouter();
  return  (
		<>
			<div>profile</div>
			<ul className="">
				<li onClick={() => router.push('profile/1')} >Profile 1</li>
				<li onClick={() => router.push('profile/2')} >Profile 2</li>
				<li onClick={() => router.push('profile/3')} >Profile 3</li>
				<Link 
				prefetch={true}
					href={{
						pathname:'/profile/4',
						query:{
							userName: 'Qasir',
							userId: 12,
							personalDetails: JSON.stringify({age:18})
						}
					}}
					>Profile 4</Link> <br />
				<Link 
				prefetch={true}
					href={{
						pathname:'http://www.qasir.co.uk/',
						query:{
							userName: 'Qasir',
							userId: 12,
							personalDetails: JSON.stringify({age:18})
						}
					}}
					target='_blank'
					>Profile Qasir</Link>
			</ul>
		</>
  )
}

export default Profile