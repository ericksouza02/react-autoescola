import React from "react";
import {render} from '@testing-library/react';
import ThemeProvider from '../styles/ThemeProvider'
import Grid from "./Grid"

test('renders the title', () => {
    const { getByText } = render(
    <ThemeProvider>
        <Grid title='My Title'/>
    </ThemeProvider>
    )
    
    expect(getByText('My Title')).toBeInTheDocument()
})



test('renders the children', () => {
    const {getByText} = render(
    <ThemeProvider>
        <Grid>My children</Grid>
    </ThemeProvider>
    )
    expect(getByText('My children')).toBeInTheDocument()
})