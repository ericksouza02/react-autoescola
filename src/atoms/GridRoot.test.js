import React from "react";
import {render} from '@testing-library/react';

import GridRoot from "./GridRoot"

test('match snapshot with no params', () => {
    const {asFragment} = render(<GridRoot />)
    

    expect(asFragment()).toMatchSnapshot()
})

test('match snapshot with params', () => {
    const {asFragment} = render(<GridRoot sm={2} md={3} lg={4} xl={5}/>)
    

    expect(asFragment()).toMatchSnapshot()
})