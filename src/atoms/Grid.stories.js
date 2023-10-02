import React from "react";
import Grid from "./Grid";
import GridRoot from "./GridRoot";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from 'react-icons/fa';
import CardIcon from '../assets/carro-esporte.png'
import { text } from "@storybook/addon-knobs";

export default {
    title:"Components/Atoms/Grid",
    component: Grid
}

export const usage = () => (
    <Grid icon={<FaCar/>} title={text('Title', 'Título')}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, obcaecati?</p>
    </Grid>
)


export const withGrid = () => (
    <GridRoot sm={3} md={3} lg={4} xl={5}>
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
)