import React from 'react';
import {Post, User} from "@/types";
import {Box, Link, Text} from "@kuma-ui/core";

interface Props {
    post: Post
    author?: User
}

function PostCard({post, author}: Props) {
    return (
        <Box borderWidth={"1px"} borderColor={"black"} borderStyle={"solid"} p={8} margin={8}>
            <Text fontSize='16px' fontWeight={"bold"} margin={0}>{post.id} - {post.title}</Text>
            {author &&
                <Link
                    m={0}
                    color={"blueviolet"}
                    href={`/authors/${author.id}`}
                >
                    {author.name}
                </Link>}

            <Box>
                {post.body.substring(0, 45) + "..."}
            </Box>
        </Box>
    );
}

export default PostCard;
