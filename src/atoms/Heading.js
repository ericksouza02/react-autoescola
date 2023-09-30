import React from "react";
import styled from "styled-components";
import {breakAt, BreakPointSizes} from '../styles/BreakPointSize';
import ThemeProvider from "../styles/ThemeProvider";

const Heading = styled.h1`
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        background-color: ${props => props.theme.colors.primary.main};
        height: 5px;
        width: 70px;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5,
    h6 {
       margin-bottom: 0;
    }
`

export default Heading;
