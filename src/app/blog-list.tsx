'use client'
import React, {useState} from 'react';
import {Post, User} from "@/types";
import PostCard from "@/app/post-card";
import {Box, VStack} from "@kuma-ui/core";
import PagePicker from "@/app/page-picker";

interface Props {
    page: number
    posts: Post[]
    authors?: User[]
}

const BlogList = ({page, posts, authors}: Props) => {

    const POST_PER_PAGE = 25
    const [currentPage, setPage] = useState(page)

    return <>
        {posts.length > POST_PER_PAGE && <PagePicker currentPage={currentPage} setPage={(n) => setPage(n)}
                                                     numberPage={posts.length / POST_PER_PAGE}/>}
        <VStack>
            {posts.slice((currentPage - 1) * POST_PER_PAGE, currentPage * POST_PER_PAGE).map(p =>
                <Box key={p.id}
                     width="100%">
                    <PostCard post={p} author={authors && authors.find(e => e.id == p.userId)}/>
                </Box>)}
        </VStack>
        {posts.length > POST_PER_PAGE && <PagePicker currentPage={currentPage} setPage={(n) => setPage(n)}
                                                     numberPage={posts.length / POST_PER_PAGE}/>}
    </>;
};

export default BlogList;
