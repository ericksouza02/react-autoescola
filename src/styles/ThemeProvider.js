import { ThemeProvider as StyledProvider } from "styled-components"

const theme = {
    colors:{
        primary: {
            main: '#F3D500',
            dark: '#E8BB00',
            light: '#FDED00',
            text: '#212121'
        },
        danger: {
            main: '#E80700',
            dark: '#D80300',
            light: '#F31F00',
            text: '#212121'
        }
    }
}

const ThemeProvider = ({children}) => (
    <StyledProvider theme={theme}>
        {children}
    </StyledProvider>
)

export default ThemeProvider;