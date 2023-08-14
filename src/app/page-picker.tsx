'use client'
import React from 'react';
import {Box, Flex, HStack, Text} from "@kuma-ui/core";

interface Props {
    currentPage: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    numberPage: number
}

function PagePicker({currentPage, setPage, numberPage}: Props) {
    return <Flex flexDirection={"row"} justify={"space-evenly"} alignItems={"center"} unselectable={"on"}>
        <Box onClick={() => setPage(1)}
             _hover={{cursor: "pointer"}}
        >{"<<"}</Box>

        <Box onClick={() => setPage((currentPage + numberPage + 2) % numberPage + 1)}
             _hover={{cursor: "pointer"}}
        >{"<"}</Box>

        <Box> {currentPage}/{numberPage}</Box>

        <Box onClick={() => setPage(currentPage % numberPage + 1)}
             _hover={{cursor: "pointer"}}
        >{">"}</Box>

        <Box onClick={() => setPage(numberPage)}
             _hover={{cursor: "pointer"}}
        >{">>"}</Box>
    </Flex>


    /*<Box onClick={() => setPage(currentPage % numberPage + 1)}>
        <Text>
            {currentPage}/{numberPage}
        </Text>
    </Box>*/
}

export default PagePicker;
