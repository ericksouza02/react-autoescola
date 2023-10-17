import React from "react";
import styled, {css} from "styled-components";
import PropTypes from "prop-types"

//#region CardBody
const StyledBody = styled.div`
    padding: 16px;
    h6{
        margin-top: 0;
    }
`

export const CardBody = ({children}) =>   <StyledBody>{children}</StyledBody>


CardBody.defaultProps = {
    children: undefined,
}   

CardBody.propTypes = {
    children: PropTypes.node,
}
//#endregion

//#region CardMedia
const StyledMedia = styled.div`
    margin: 0;
    padding: 0;
    background-image: url(${props=> props.image});
    background-position: center bottom;
    background-size: cover;
    min-height: 270px;
`
export const CardMedia = ({image}) => (
    <StyledMedia image={image}/>
)

CardMedia.defaultProps = {
    image: undefined,
}   

CardMedia.propTypes = {
    image: PropTypes.node,
}
//#endregion

//#region Card
const StyledCard = styled.div`
    padding: 0;
    background-color: #fff;
    border-radius: 4px;
`

const Card = ({children}) =><StyledCard>{children}</StyledCard>
;

Card.defaultProps = {
    image: '',
    title: 'Teste de Título',
    children: ''
}   

Card.propTypes = {
    image: PropTypes.node,
    title: PropTypes.string,
    children: PropTypes.node,
}
//#endregion

export default Card;