import React from "react";
import { render } from "@testing-library/react"
import Heading from "./Heading";

test('match snapshot component Heading', () => {

    const {asFragment} = render(<Heading/>)

    expect(asFragment).toMatchSnapshot()
})