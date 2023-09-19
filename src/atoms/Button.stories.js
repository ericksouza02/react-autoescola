import React from "react";
import Button from "./Button";
import styled from "styled-components";
import ThemeProvider from "../styles/ThemeProvider";
export default {
    title:"Components/Atoms/Button",    
    component: Button
}

const Container = styled.div`
    display: inline;
    & > * {
        margin-right: 10px;
    }
`

const Title = styled.h1 `
    color: #000;
    margin-left: 20px;
`

export const usage = () =>
    <Container>
        <Title>ENABLED</Title>
        <Button color='primary'>PRIMARY</Button>
        <Button color='danger' >DANGER</Button>
        <Button color='default'>DEFAULT</Button>

        <Title>DISABLED</Title>
        <Button color='primary' disabled>PRIMARY</Button>
        <Button color='danger'  disabled>DANGER</Button>
        <Button color='default' disabled>DEFAULT</Button>
    </Container> 

export const outlined = () =>
    <Container>
        <Title>ENABLED</Title>
        <Button color='primary' variant='outlined'>PRIMARY</Button>
        <Button color='danger'  variant='outlined'>DANGER</Button>
        <Button color='default' variant='outlined'>DEFAULT</Button>

        <Title>DISABLED</Title>
        <Button color='primary' disabled variant='outlined'>PRIMARY</Button>
        <Button color='danger'  disabled variant='outlined'>DANGER</Button>
        <Button color='default' disabled variant='outlined'>DEFAULT</Button>
    </Container> 

export const link = () =>
    <Container>
        <Title>ENABLED</Title>
        <Button color='primary' variant='link'>PRIMARY</Button>
        <Button color='danger'  variant='link'>DANGER</Button>
        <Button color='default' variant='link'>DEFAULT</Button>

        <Title>DISABLED</Title>
        <Button color='primary' disabled variant='link'>PRIMARY</Button>
        <Button color='danger'  disabled variant='link'>DANGER</Button>
        <Button color='default' disabled variant='link'>DEFAULT</Button>
    </Container> 