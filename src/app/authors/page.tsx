import {getAuthors} from "@/app/_api/getAuthors";
import {User} from "@/types";
import {Link, Text} from "@kuma-ui/core";
import {NavBar} from "@/app/_components/navbar";

export default async function Authors() {
    const authors = await getAuthors() as User[]
    return <>
        <NavBar/>
        <Text fontSize="16px" textAlign={"center"}>
            Author List
        </Text>
        {authors.map(a => <Link key={a.id} href={`/authors/${a.id}`}>{a.name}</Link>)}
    </>
}
