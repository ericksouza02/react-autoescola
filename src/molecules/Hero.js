import React from "react";
import styled, {css} from "styled-components";
import PropTypes from 'prop-types' ;
import Heading from "../atoms/Heading";
import Container from "../atoms/Container";
const Root = styled.div`

    display: inline-block;
    body.sb-show-main.sb-main-padded{
    padding: 0
    }
    padding: 100px 0;
    width: 100%;

    h1, h2, h3, h4, h5, h6 {
        font-size: 40px;
    }

    p,li {
        font-size: 20px;
        font-weight: 300;
    }

    li {
        &::before {
            content: "\\2713\\0020";
            color: ${props => props.theme.colors.primary.main};;
        }
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    strong{
            color: ${props => props.theme.colors.primary.main};
        }

    ${props => css`
        background: url(${props.image}), rgba(0, 0, 0, 0.4);
        background-position: center;
        background-size: cover;
        background-blend-mode: overlay;
    `}
`


const Hero = ({image, children}) => (
    <Root image={image}>
        <Container>
            {children}
        </Container>
    </Root>
)

Hero.propTypes = {
    image: PropTypes.string,
    children: PropTypes.node
}

Hero.defaultProps = {
    image: '',
    children: ''
}

export default Hero;

