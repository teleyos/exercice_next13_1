import {Flex, Link, Spacer, Text} from "@kuma-ui/core";
import BlogList from "@/app/_components/blog-list";
import {Post, User} from "@/types";
import {getPosts} from "@/app/_api/getPosts";

const getAuthor = async (id: number) => {
    try {
        const authors = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return await authors.json() as User
    } catch (e) {
        return console.error("couldn't fetch authors :", e)
    }
}

export default async function Author({params}: {
    params: { id: string }
}) {

    const posts = await getPosts() as Post[]
    const author = await getAuthor(Number.parseInt(params.id)) as User;

    return <>
        <Flex justify={"space-between"}>
            <Link href={"/"}>Posts List</Link>
            <Link href={"/authors"}>Author List</Link>
        </Flex>
        <Text fontSize="16px" textAlign={"center"}>
            Blog Posts from {author.name}
        </Text>
        <Spacer size={"16px"}/>
        <BlogList page={1} posts={posts.filter(p => p.userId == author.id)}/>
    </>
}
