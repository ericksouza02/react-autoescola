import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    body.sb-show-main.sb-main-padded{
    padding: 0;
    }

    html{
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 100%;
        color: #fff;
        box-sizing: border-box;
    }

    *, *::before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle;
