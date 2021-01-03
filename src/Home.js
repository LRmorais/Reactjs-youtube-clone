import React from 'react';
// makeStyles cria um objeto de estilos que pode ser usado em cada elemento
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'

// importando propriedades definidas em theme
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh'
    }
  }));

function Home() {
    // instaciando o objeto makeStyles
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <AppBar>
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      {/* <MenuIcon /> */}
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
      </div>
  )
}

export default Home;