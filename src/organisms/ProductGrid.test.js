import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import ProductGrid from "./ProductGrid";
import ThemeProvider from "../styles/ThemeProvider";


const buildProducts = (size) => {
    const result = []
    for (let i=0; i < size; i+=1 ){
        result.push({id: i, title:`Title ${i}`})
    }
    return result;
}

describe.each([
    [1,1],
    [2,2],
    [3,3],
    [4,3],
    [5,3],
    [6,3]
 ])('with %i products show only %i items', (size,showOnly) => {

    test(`show only ${showOnly} items`, () => {
        render(
        <ThemeProvider>
            <ProductGrid products={buildProducts(size)}/>
        </ThemeProvider>
)
        expect(screen.getAllByRole("heading").length).toBe(showOnly)
    })    

    test('show all the products when button is clicked', async () => {
        render(
            <ThemeProvider>
                <ProductGrid products={buildProducts(size)}/>
            </ThemeProvider>
    )
            fireEvent.click(screen.getByText('Lista Completa de Serviços'))
            expect(screen.getAllByRole("button").length).toBe(showOnly)
    })
})