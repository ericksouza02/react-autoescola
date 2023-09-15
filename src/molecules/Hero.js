import React from "react";
import styled, {css} from "styled-components";
import {breakAt, BreakPointSizes} from '../styles/BreakPointSize'
import PropTypes from 'prop-types' 

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
            color: #DFA400;
        }
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    ${props => css`
        background: url(${props.image}), rgba(0,0,0,0.4);
        background-position: center;
        background-size: cover;
        background-blend-mode: overlay;
    `}
`

const Container = styled.div`
    padding-left: 16px;
    max-width: 100%;

    ${breakAt(BreakPointSizes.sm)}{
        padding: 0 16px;
    }

    ${breakAt(BreakPointSizes.lg)}{
        width: 1140px;
        padding: 0;
        margin: 0 auto;
    }
`

const Hero = ({image, title, children}) => (

    <Root image={image} title={title}>
        <Container>
            <h1>{title}</h1>
            {children}
        </Container>
    </Root>
)

Hero.propTypes = {
    image: PropTypes.node,
    title: PropTypes.string,
    children: PropTypes.node
}

Hero.defaultProps = {
    image: '',
    title: 'Digite um texto',
    children: ''
}

export default Hero;

