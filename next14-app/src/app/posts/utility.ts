'use server'
export async function savePost(data: FormData) {
    'use server'
    const title = data.get('title')
    const description = data.get('description')
    const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({title, description})
    });
    if(response.ok) {
        const posts = await response.json();
        console.log('********',posts);
    }
}