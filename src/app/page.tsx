import BlogList from "./blog-list";
import {Flex, Link, Spacer, Text} from "@kuma-ui/core";
import {Post, User} from "@/types";
import {getPosts} from "@/app/getPosts";
import {getAuthors} from "@/app/getAuthors";
import {NavBar} from "@/app/navbar";

export default async function Home() {

    const posts = await getPosts() as Post[]
    const authors = await getAuthors() as User[]


    return (
        <Flex flexDir={"column"} justify={"center"}>
            <NavBar/>
            <Text fontSize="16px" textAlign={"center"}>
                Blog Posts
            </Text>
            <Spacer size={"16px"}/>
            <BlogList page={1} posts={posts} authors={authors}/>
        </Flex>
    );
}
