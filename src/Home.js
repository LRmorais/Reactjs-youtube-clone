import React from 'react';
import Box from '@material-ui/core/Box';

// makeStyles cria um objeto de estilos que pode ser usado em cada elemento
import {
  makeStyles, AppBar, Toolbar, IconButton, Button,
  List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Drawer, ListSubheader
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
// importando icones
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import { AddCircle } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
// importando propriedades definidas em theme
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  logo: {
    height: 30
  },
  menuIcon: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  icons: {
    paddingRight: theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  },
  listItemText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));

function Home() {
  // instaciando o objeto makeStyles
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* color= 'inherit' deixa o background branco */}
      <AppBar
        color='inherit'
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            className={classes.menuIcon}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          {/* adicionando imagem da logo youtube */}
          <img src="/assets/logoDark.png" alt="logo" className={classes.logo} />

          {/* div criada somente para criar um espaçamento entre a logo e os icones */}
          <div className={classes.grow} />

          <IconButton className={classes.icons} color="inherit" >
            <VideoCallIcon />
          </IconButton>

          <IconButton className={classes.icons} color="inherit" >
            <AppsIcon />
          </IconButton>

          <IconButton className={classes.icons} color="inherit" >
            <MoreVertIcon />
          </IconButton>

          <Button variant="outlined" color="secondary" startIcon={<AccountCircleIcon />}>Fazer Login</Button>
        </Toolbar>
      </AppBar>

      {/* --------------NAV BAR--------------------------------> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Inicio'} />
            </ListItem>
          </List>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Em Alta'} />
            </ListItem>
          </List>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Inscrições'} />
            </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Biblioteca'} />
            </ListItem>
          </List>

          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Historico'} />
            </ListItem>
          </List>

          <Divider />
          {/* Box é como se fosse uma div com propriedades css direto no componente */}
          <Box p={2}>
            <Typography variant="body2">Faça login para curtir vídeos, comentar e se inscrever</Typography>
            <Box mt={2}>
              <Button
                variant='outlined'
                color='secondary'
                startIcon={<AccountCircleIcon />}
              >Fazer Login</Button>
            </Box>
          </Box>

          <Divider />

          <List
            component='nav'
            aria-aria-labelledby='nested-list-subheade'
            subheader={
              <ListSubheader
                component='div'
                id='nested-list-subheader'
                className={classes.subheader}
              >
                O melhor do youtube
              </ListSubheader>
            }
          >

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Música'}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Esportes'}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Jogos'}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Filmes'}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Noticias'}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Ao vivo'}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Destaques'}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Videos 360'}
              />
            </ListItem>
          </List>
          <Divider />

          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Procurar Mais'}
            />
          </ListItem>
          <Divider />

        </div>
      </Drawer>
    </div>
  )
}

export default Home;