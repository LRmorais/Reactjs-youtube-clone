import React from 'react';
// CreateMuiTheme cria um objeto com as propriedades que o ThemeProvider ira ler
import {ThemeProvider, createMuiTheme} from '@material-ui/core'
import Home from './Home';



function App() {
// propriedades --> Pallet, Typoraphy, Spacing, Breackponts, z-index, globals (detalhadas na documentação)
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5'
      }
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
