import React from "react";
import { render } from "@testing-library/react"
import Heading from "./Heading";
import ThemeProvider from "../styles/ThemeProvider";

test('match snapshot component Heading', () => {

    const {asFragment} = render(
    <ThemeProvider>
        <Heading/>
    </ThemeProvider>

    )
    expect(asFragment()).toMatchSnapshot()
})