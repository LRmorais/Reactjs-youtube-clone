import React from 'react';
// CreateMuiTheme cria um objeto com as propriedades que o ThemeProvider ira ler
// makeStyles cria um objeto de estilos que pode ser usado em cada elemento
import { Button, ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh'
  }
})

function App() {
// propriedades --> Pallet, Typoraphy, Spacing, Breackponts, z-index, globals (detalhadas na documentação)
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      }
    }
  });
  // instaciando o objeto makeStyles
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} >

      </div>
    </ThemeProvider>
  );
}

export default App;
