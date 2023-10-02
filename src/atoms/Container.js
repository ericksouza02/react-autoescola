import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import {breakAt, BreakPointSizes} from '../styles/BreakPointSize';
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

Container.defaultProps = {
    children: undefined,
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;