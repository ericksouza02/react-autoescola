import React from "react";
import styled from "styled-components";
import Container from "../atoms/Container";
import GridRoot from "../atoms/GridRoot";
import Heading from "../atoms/Heading";
import {FaPhone, FaBuilding, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

const Root = styled.footer`
    background-color: #2a2a2a;
    color: #aaa;
    padding: 40px 0;

    h6 {
        color:#fff;
        margin-top: 0;
    }

`

const IconContainer = styled.span`
    margin-right: 8px;
`

const FooterLink = styled.a`
    color: ${props => props.theme.colors.primary.main};

`

const Footer = () => (
    <Root>
        <Container>
            <GridRoot md={3}>
                <div>
                    <Heading>
                        <h6>
                            Nardini Auto Escola
                        </h6>
                    </Heading>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vitae?</p>
                </div>
                <div>
                <Heading>
                        <h6>
                            Contatos
                        </h6>
                    </Heading>
                    <p>
                        <IconContainer>
                            <FaPhone/>
                        </IconContainer>
                        (11) 91234-5679
                    </p>
                    <p>
                        <IconContainer>
                            <FaBuilding/>
                        </IconContainer>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, eos? 
                    </p>
                </div>
                <div>
                <Heading>
                        <h6>
                            Redes Sociais
                        </h6>
                    </Heading>
                    <FooterLink>
                    <IconContainer>
                        <FaBuilding/>
                    </IconContainer>
                    Facebook
                    </FooterLink>
                </div>
            </GridRoot>
        </Container>
    </Root>    
);


export default Footer;