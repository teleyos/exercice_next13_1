import {Post} from "@/types";

export const getPosts = async () => {
    try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        return await posts.json() as Post[]
    } catch (e) {
        return console.error("couldn't fetch posts :", e)
    }
}
