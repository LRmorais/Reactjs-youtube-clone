import React from 'react';
// makeStyles cria um objeto de estilos que pode ser usado em cada elemento
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      background: 'red',
      height: '100vh'
    }
  })

function Home() {
    // instaciando o objeto makeStyles
  const classes = useStyles();
  return (
      <div className={classes.root}>
          Oii
      </div>
  )
}

export default Home;