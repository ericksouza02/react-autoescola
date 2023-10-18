import React from "react";
import PropTypes from "prop-types"
import { Children } from "react";
import { cloneElement } from "react";
import { useState } from "react";
const AccordionGroup = ({children}) => {
    const [index, setIndex] = useState(-1);
    return Children.map(children, (child, childIndex) => 
        cloneElement(child, { 
            open: childIndex == index,
            onChange: () => {
                if (childIndex == index){
                    setIndex(-1)
                }else{
                    setIndex(childIndex)
                }
            } 
         })
    )
};

AccordionGroup.defaultProps = {
    children: undefined
}

AccordionGroup.propTypes = {
    children: PropTypes.node
}

export default AccordionGroup;