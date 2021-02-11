import React from 'react';
import Box from '@material-ui/core/Box';

// makeStyles cria um objeto de estilos que pode ser usado em cada elemento
import {
  makeStyles, AppBar, Toolbar, IconButton, Button,
  List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Drawer, ListSubheader, Grid, Hidden,
  Switch
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
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
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AssignmentIcon from '@material-ui/icons/Assignment';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LiveTvIcon from '@material-ui/icons/LiveTv';
// importando propriedades definidas em theme
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
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
    height: 25
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

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];

function Home({ darkMode, setDarkMode }) {
  // instaciando o objeto makeStyles
  const classes = useStyles();
  const theme = useTheme();
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
          >
            <MenuIcon />
          </IconButton>
          {/* adicionando imagem da logo youtube */}
          <img
            src={
              theme.palette.type === 'dark'
                ? '/images/branco.png'
                : '/images/preto.png'
            }
            alt="logo"
            className={classes.logo} />

          {/* div criada somente para criar um espaçamento entre a logo e os icones */}
          <div className={classes.grow} />
          {/* define o tema dark ou light */}
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons} >
            <VideoCallIcon />
          </IconButton>

          <IconButton className={classes.icons} >
            <AppsIcon />
          </IconButton>

          <IconButton className={classes.icons} >
            <MoreVertIcon />
          </IconButton>

          <Button variant="outlined" color="secondary" startIcon={<AccountCircleIcon />}>Fazer Login</Button>
        </Toolbar>
      </AppBar>

      {/* --------------NAV BAR--------------------------------> */}
      <Box display='flex'>
        {/* a medida que a resolução for diminuindo de acordo a uma condição, ele ocultara conteudos */}
        <Hidden mdDown>
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
                aria-labelledby='nested-list-subheade'
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
                    <MusicNoteIcon />
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
                    <EmojiEventsIcon />
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
                    <SportsEsportsIcon />
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
                    <LocalMoviesIcon />
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
                    <AssignmentIcon />
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
                    <LiveTvIcon />
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
                    <EmojiObjectsIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Aprender'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <YouTubeIcon />
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
        </Hidden>
        <Box p={8}>
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>
          {/* criar um loop para colocar cada item do array videos em um grid item */}
          {/* lg, md, sm, xs trabalha a parte responsiva, adaptando a quantidade de itens de acordo com dispositivo */}
          <Grid container spacing={2}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>

                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

    </div>
  )
}

export default Home;