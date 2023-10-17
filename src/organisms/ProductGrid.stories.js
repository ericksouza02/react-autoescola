import React from "react";
import ProductGrid from "./ProductGrid";
import CardImage from '../assets/car-img.jpg';
export default {
    title:"Components/Organisms/ProductGrid",
    component: ProductGrid
}

export const usage = () => (
    <ProductGrid products={[
    {   id: 1, 
        title: 'Título', 
        summary:'texto', 
        image: CardImage
    },
    
    {   id: 2, 
        title: 'Título', 
        summary:'texto', 
        image: CardImage
    },

    {   id: 3, 
        title: 'Título', 
        summary:'texto', 
        image: CardImage
    },

    {   id: 4, 
        title: 'Título', 
        summary:'texto', 
        image: CardImage
    },

    {   id: 5, 
        title: 'Título', 
        summary:'texto', 
        image: CardImage
    },

    {   id: 6, 
        title: 'Título', 
        summary:'texto', 
        image: CardImage
    },
    ]}/>
)