import styled from "styled-components";
import ThemeProvider from './styles/ThemeProvider';
import Home from "./pages/Home";
const Root = styled.div`
  color: #fff;
`

function App() {
  return (
    <Root>
      <ThemeProvider>
       <Home/>
      </ThemeProvider>
    </Root>
  );
}

export default App;
