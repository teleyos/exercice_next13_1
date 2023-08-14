import {User} from "@/types";

export const getAuthors = async () => {
    try {
        const authors = await fetch("https://jsonplaceholder.typicode.com/users")
        return await authors.json() as User[]
    } catch (e) {
        return console.error("couldn't fetch authors :", e)
    }
}
