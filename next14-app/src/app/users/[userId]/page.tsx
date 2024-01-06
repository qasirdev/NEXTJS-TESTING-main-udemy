// const BASE_URL = "https://mon-cours-next-js-13.vercel.app";
import React from "react";

//http://localhost:3000/users/12
const fetchUser = async (userId: string) => {
	//cache: "no-store": for server,"force-cache": for client,
  const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
    method: "GET",
		cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const jsonResult = await response.json();
  return jsonResult;
};

export async function generateMetadata({ params }: any) {
  const { data } = await fetchUser(params.userId);
  return {
    title: "This is user title",
    description: "This is user description",
    openGraph: {
      id: data[0].id,
      title: data[0].name,
    },
  };
  // return {
  //     title: post.title,
  //     description: post.description,
  //     openGraph: {
  //       title: post.title,
  //       description: post.description,
  //       url: `${BASE_URL}/post/${post.id}`,
  //       type: "website",
  //       siteName: post.title,
  //       locale: "fr-FR",
  //       images: [
  //         {
  //           url: `${BASE_URL}/${post.img_url}`,
  //         },
  //       ],
  //     },
  //   };
}

const UserId = ({ params }: any) => {
  return <div>UserId: {params.userId}</div>;
};

export default UserId;
