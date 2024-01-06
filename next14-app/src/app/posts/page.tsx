'use client'
import React from "react";
import {savePost} from "./utility"
// async function savePost(data: FormData) {
//     'use server'
//     const title = data.get('title')
//     const description = data.get('description')
//     const response = await fetch("http://localhost:3000/api/posts", {
//         method: "POST",
//         cache: "no-cache",
//         body: JSON.stringify({title, description})
//     });
//     if(response.ok) {
//         const posts = await response.json();
//         console.log('********',posts);
//     }
// }
const Post = () => {
  return (
    <main className="flex gap-2 m-4">
      <form action={savePost} className="grid">
        <input className="p-2 border" name="title" type="text" />
        <textarea className="p-2 border" name="description" />
        <button className="px-4 py-5 text-black bg-sky-500" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Post;
