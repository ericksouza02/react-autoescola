import React from "react";
import PropTypes from "prop-types";
import Hero from '../molecules/Hero'
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';
import GridRoot from "../atoms/GridRoot";
import Grid from '../atoms/Grid';
import Section from "../molecules/Section";
import Accordion from "../atoms/Accordion";
import Footer from '../organisms/Footer';
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa';
import CardImage from '../assets/car-img.jpg';
import AboutImage from '../assets/car-img.jpg'
import ProductGrid from "../organisms/ProductGrid";
import AccordionGroup from "../atoms/AccordionGroup";

const products = [
    {id: 1, title: "1 Habilitação Carro e Moto", summary: "lorem ipsum dolor sit met consectur adipiscing elit", image: CardImage},
    {id: 2, title: "1 Habilitação Carro", summary: "lorem ipsum dolor sit met consectur adipiscing elit", image: CardImage},
    {id: 3, title: "1 Habilitação Moto", summary: "lorem ipsum dolor sit met consectur adipiscing elit", image: CardImage},
    {id: 4, title: "Mudança de Categoria Caminhão", summary: "lorem ipsum dolor sit met consectur adipiscing elit", image: CardImage},
    {id: 5, title: "Aulas Avulsas", summary: "lorem ipsum dolor sit met consectur adipiscing elit", image: CardImage},
]

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
    <Section inverse>
        <Heading>
            <h2>Conheça nossos serviços</h2>
        </Heading>
        <ProductGrid products={products}/>
    </Section>

    <Section>
        <GridRoot md={2}>
            <div>
                <Heading>
                    <h2>Nardini Auto Escola</h2>
                </Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque enim soluta dolorum consectetur. Delectus, qui deserunt. Explicabo, laborum quae.</p>
                <div>
                    <Button color='primary'>Saiba Mais</Button>
                </div>
            </div>
            <div>
                <img src={AboutImage} width='100%' />
            </div>
        </GridRoot>
    </Section>
    
    <Section inverse>
        <Heading>
            <h2>Dúvidas Recorrentes</h2>
        </Heading>
        <AccordionGroup>
        <Accordion title='Como eu renovo minha CNH?'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit obcaecati perspiciatis aut iste ducimus qui. Officia, quos provident. Impedit expedita nesciunt natus eius sapiente fugiat?
        </p>
    </Accordion>

    <Accordion title='Como eu faço a mudança de categoria?'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit obcaecati perspiciatis aut iste ducimus qui. Officia, quos provident. Impedit expedita nesciunt natus eius sapiente fugiat?
        </p>
    </Accordion>

    <Accordion title='Fui multado, e agora?'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit obcaecati perspiciatis aut iste ducimus qui. Officia, quos provident. Impedit expedita nesciunt natus eius sapiente fugiat?
        </p>
    </Accordion>
    </AccordionGroup>
    </Section>


        <Footer/>
 </>
);

Home.defaultProps = {}

Home.propTypes = {}

export default Home;