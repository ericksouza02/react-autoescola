import { render } from "@testing-library/react";
import GlobalStyle from '../styles/GlobalStyle'
import ThemeProvider from "./ThemeProvider";
test('match snapshot GlobalStyle', () => {
    const {baseElement} = render(
    <ThemeProvider>
    <GlobalStyle/>
    </ThemeProvider>
)
    expect(baseElement).toMatchSnapshot()
});

