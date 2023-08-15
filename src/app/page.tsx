import BlogList from "@/app/_components/blog-list";
import {Spacer, Text} from "@kuma-ui/core";
import {Post, User} from "@/types";
import {getPosts} from "@/app/_api/getPosts";
import {getAuthors} from "@/app/_api/getAuthors";
import {NavBar} from "@/app/_components/navbar";

export default async function Home() {

    const posts = await getPosts() as Post[]
    const authors = await getAuthors() as User[]


    return <>
        <NavBar/>
        <Text fontSize="16px" textAlign={"center"}>
            Blog Posts
        </Text>
        <Spacer size={"16px"}/>
        <BlogList page={1} posts={posts} authors={authors}/>
    </>
}
