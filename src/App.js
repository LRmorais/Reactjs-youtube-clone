import React, { useState } from 'react';
// CreateMuiTheme cria um objeto com as propriedades que o ThemeProvider ira ler
import {ThemeProvider, createMuiTheme} from '@material-ui/core'
import Home from './Home';



function App() {

  // tema dark
  const [darkMode, setDarkMode] = useState(false);
// propriedades --> Pallet, Typoraphy, Spacing, Breackponts, z-index, globals (detalhadas na documentação)
  const theme = createMuiTheme({
    palette: {
      // condicional para o tema dark ou light definido pelo switch
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF'
      },
      background:{
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
      }
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
       <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
