import React from "react";
import styled, {css} from "styled-components";

const Root = styled.div`
    body.sb-show-main.sb-main-padded{
    padding: 0
    }
    padding: 100px 0;
    width: 100%;
    p,li {
        font-size: 20px;
        font-weight: 300;
    }

    li {
        &::before {
            content: "\\2713\\0020";
        }
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    ${props => css`
        background-image: url(${props.image});
        background-position: center;
        background-size: cover;
        background-blend-mode: overlay;
    `}
`

const Container = styled.div`
    padding-left: 16px;
    max-width: 700px;
`

const Hero = ({image, title, children}) => (

    <Root image={image} title={title}>
        <Container>
            <h1>{title}</h1>
            {children}
        </Container>
    </Root>
)

export default Hero;

