import { render } from "@testing-library/react";
import GlobalStyle from '../styles/GlobalStyle'

test('match snapshot GlobalStyle', () => {
    const {baseElement} = render(<GlobalStyle/>)

    expect(baseElement).toMatchSnapshot()
});

