import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

import {breakAt, BreakPointSizes} from '../styles/BreakPointSize'

const breakColumnAt = (size) => props => props[size] && css`
${breakAt(BreakPointSizes[size])}{
grid-template-columns: repeat(${props => props[size]}, 1fr);
}
` 

const GridRoot = styled.div`
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr;

    ${breakColumnAt("sm")}
    ${breakColumnAt("md")}
    ${breakColumnAt("lg")}
    ${breakColumnAt("xl")}
  
`

GridRoot.defaultProps = {
    sm: undefined,
    md: undefined,
    lg: undefined,
    xl: undefined,
}

GridRoot.propTypes = {
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
}

export default GridRoot;