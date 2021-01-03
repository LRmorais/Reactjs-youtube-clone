import React from 'react';
// makeStyles cria um objeto de estilos que pode ser usado em cada elemento
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// importando propriedades definidas em theme
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  appBar:{
    boxShadow:'none'
  },
  menuIcon:{
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  icons:{
    paddingRight: theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  }
}));

function Home() {
  // instaciando o objeto makeStyles
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* color= 'inherit' deixa o background branco */}
      <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {/* div criada somente para criar um espaçamento entre a logo e os icones */}
          <div className={classes.grow}/>

          <IconButton  className={classes.icons} color="inherit" >
            <VideoCallIcon />
          </IconButton><IconButton  className={classes.icons} color="inherit" >
            <AppsIcon/>
          </IconButton><IconButton  className={classes.icons} color="inherit" >
            <MoreVertIcon/>
          </IconButton>

          <Button variant="outlined" color="secondary" startIcon={<AccountCircleIcon/>}>Fazer Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Home;