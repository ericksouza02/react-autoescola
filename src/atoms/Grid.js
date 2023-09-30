import React from "react";

import PropTypes from "prop-types";
import styled, {css} from "styled-components";
import {breakAt, BreakPointSizes} from '../styles/BreakPointSize'
const getPrimaryColor = ({theme}) => theme.colors.primary.main;

const Root = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;
    color: #000;

    & p {
        margin: 0;
    }
`


const Title = styled.h2`
    letter-spacing: 1px;
    margin: 16px 0;
    font-weight: 100;
    min-height: 3.12rem;

    ${breakAt(BreakPointSizes.lg)} {
        min-height: 3.9rem;
    }

`
const IconRoot = styled.div`
    width: 116px;
    height: 116px;
    display: inline-block;
    padding: 8px;
    border-radius: 50%;
    &:hover {
        border: 1px solid ${getPrimaryColor};

        > * {
            color: #fff;
        background-color: ${getPrimaryColor};
        }
    }
    `

const Icon = styled.div`
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e9e9e9;
    font-size: 32px;
    width: 100%;
    height: 100%;
    color: ${getPrimaryColor};

    
`



const Grid = ({icon, title, children}) => (
    <Root icon={icon} title={title}>

        <IconRoot>
            <Icon>
                {icon}
            </Icon>
        </IconRoot>
            <Title>
                {title}
            </Title>

            {children}
    </Root>
)


Grid.defaultProps = {
    icon: '',
    title: 'Título',
    children: undefined
}

Grid.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    children: PropTypes.node
}

export default Grid;