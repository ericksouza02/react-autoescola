import { render } from "@testing-library/react";
import Hero from '../molecules/Hero'
import ThemeProvider from '../styles/ThemeProvider'

test('renders children in Hero', () => {

    const {getByText} = render(
    <ThemeProvider>
        <Hero>Erick Souza</Hero>
    </ThemeProvider>
)
    expect(getByText('Erick Souza')).toBeInTheDocument()
})