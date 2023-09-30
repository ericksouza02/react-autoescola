import React from "react";
import styled from "styled-components";
import GridRoot from "./GridRoot";

export default {
    title:"Components/Atoms/GridRoot",
    component: GridRoot
}

const Box = styled.div`
    height: 200px;
    background-color: indigo;
`

export const usage = () => (
    <GridRoot sm={3} md={3} lg={4} xl={5}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
    </GridRoot>
)