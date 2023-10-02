import React from "react";
import PropTypes from "prop-types";
import Hero from '../molecules/Hero'
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import GridRoot from "../atoms/GridRoot";
import Grid from '../atoms/Grid';
import Section from "../molecules/Section";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa';
import CardImage from '../assets/card-image-story.jpg';

const Home = () => (
 <>
    <Hero image={CardImage}>
        <Heading>
            <h1>
                Ganhe sua <strong>liberdade</strong><br /> para ir e vir
            </h1>
        </Heading>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ipsam!</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, reprehenderit!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sit.</li>
        </ul>
        <Button color='primary' variant='outlined'>Matricule-se Agora</Button>
    </Hero>
    <Section>
        <GridRoot sm={2} md={3} lg={4} xl={4}>
            <Grid icon={<FaCar/>} title='Habilitação Mais Rápida'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati?</p>
            </Grid>
            <Grid icon={<FaKey/>} title='Confiança e Segurança'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati?</p>
            </Grid>
            <Grid icon={<FaMapMarkedAlt/>} title='Excelente Localização'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati?</p>
            </Grid> 
            <Grid icon={<FaAccessibleIcon/>} title='Acessibilidade'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati?</p>
            </Grid>
        </GridRoot>
    </Section>
 </>
);

Home.defaultProps = {}

Home.propTypes = {}

export default Home;