import React from "react";
import PropTypes from "prop-types"
import styled, {css} from "styled-components";

const ButtonColors = {
    default: 'default',
    primary: 'primary',
    danger:  'danger',
}

const ButtonVariants = {
    outlined: 'outlined',
    link: 'link',
    default: 'default'
}

const getColorText = (props) => props => props.theme.colors.primary.text

const getMainColor = ({theme, color}) => {
    switch(color){
        case ButtonColors.primary:
            return theme.colors.primary.main;
        case ButtonColors.danger:
            return theme.colors.danger.main;
        default:
            return "#e0e0e0"
        }
}

const getDarkColor = ({theme, color}) => {
    switch(color){
        case ButtonColors.primary:
            return theme.colors.primary.dark;
        case ButtonColors.danger:
            return theme.colors.danger.dark;
        default:
            return "#e0e0e0"
        }
}





const Button = styled.button`    
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    text-align: center;
    background-color: ${getMainColor};  
    border: 4px solid ${getMainColor};
    color: ${getColorText};
    letter-spacing: 1px;
    padding: 10px 30px;
    font-size: 20px;
    cursor: pointer;
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:enabled {
        background-color: ${getDarkColor};
    }
`;

const ButtonOutlined = styled(Button)`    
    background-color: transparent;
    color: ${getMainColor};
    border: 2px solid;
`;

const ButtonLink = styled(Button)`    
    background-color: transparent;
    color: ${getMainColor};
    border-color: transparent;
    padding: 0;
`;


const ButtonWrapper = props => {
    switch(props.variant){
        case ButtonVariants.outlined:
            return <ButtonOutlined {...props}/>
        case ButtonVariants.link:
            return <ButtonLink {...props}/>
        default:
            return <Button {...props}/>
    }
}

ButtonWrapper.defaultProps = {
    type: 'button',
    color: 'default',
    variant: 'default',
    children: undefined
}

ButtonWrapper.propTypes = {
    type: PropTypes.string,
    color: PropTypes.oneOf(Object.values(ButtonColors)),
    variant: PropTypes.oneOf(Object.values(ButtonVariants)), 
    children: PropTypes.node,
}

export default ButtonWrapper;