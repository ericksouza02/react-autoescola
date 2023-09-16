import {render} from "@testing-library/react";
import Hero from '../molecules/Hero'


test('renders children in Hero', () => {

    const {getByText} = render(<Hero>Erick Souza</Hero>)

    expect(getByText('Erick Souza')).toBeInTheDocument()
})