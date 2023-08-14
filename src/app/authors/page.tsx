import {getAuthors} from "@/app/getAuthors";
import {User} from "@/types";
import {Flex, Link, Text} from "@kuma-ui/core";
import {NavBar} from "@/app/navbar";

export default async function Authors() {
    const authors = await getAuthors() as User[]
    return <Flex flexDirection={"column"}>
        <NavBar/>
        <Text fontSize={16}>Author List</Text>
        {authors.map(a => <Link key={a.id} href={`/authors/${a.id}`}>{a.name}</Link>)}
    </Flex>
}
