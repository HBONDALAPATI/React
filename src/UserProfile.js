import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import staticData from './data'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(0.001),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },

  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  
}));

function UserProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
      <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Avatar alt="Remy Sharp" src="https://avatarfiles.alphacoders.com/124/124803.jpg" className={classes.large}/>
         </Paper>
       </Grid>
       <Grid item xs={9}>
       <Paper className={classes.paper}>
           <Grid container spacing={0.001}>
            <Grid item xs={9}>
              <h2>jordan  {"  "}<Button variant="contained" color="primary"> Follow </Button></h2>
            </Grid>
            <Grid item xs={9}>
              <h3> 1,048 posts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13.5k followers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22 following</h3>
            </Grid>
            <Grid item xs={9}>
            <h3> Jordan A.&nbsp;&nbsp;&nbsp;Graphic Designer and Photographer</h3>
            <a href="https://defectsdesigns.com">www.defectsdesign.com</a>
            </Grid>    
        </Grid>    </Paper>   
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper} className={classes.row}>
        <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/e2/c5/af/e2c5af3eb9429cd697e1c1aba715e083.jpg" className={classes.small}/>&nbsp;&nbsp;&nbsp;<br/><p><h5>Landscape</h5></p>
        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&w=1000&q=80" className={classes.small}/>&nbsp;&nbsp;&nbsp;<br/><p><h5>Beaches</h5></p>
        <Avatar alt="Remy Sharp" src="https://www.digitalphotomentor.com/photography/2016/08/people-photography-mistake-8-750px-04.jpg" className={classes.small}/>&nbsp;&nbsp;&nbsp;<br/><p><h5>People</h5></p>
         </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper, classes.row}>
          <Avatar alt="Remy Sharp" src="https://mymodernmet.com/wp/wp-content/uploads/2018/09/Zhangjiajie-national-forest-park-3.jpg" variant="square" className={classes.square, classes.large}/><p>&nbsp;&nbsp;</p>
          <Avatar alt="Remy Sharp" src="https://disneyparksnews.com/uploads/sites/3/2017/05/Avatar-Flight-of-Passage-Scene-E-750x422.jpg" variant="square" className={classes.square, classes.large}/><p>&nbsp;&nbsp;</p>
          <Avatar alt="Remy Sharp" src="https://www.wallpaperflare.com/static/311/692/953/digital-art-artwork-landscape-science-fiction-wallpaper.jpg" variant="square" className={classes.square, classes.large}/>
          </Paper></Grid>
    
      </Grid>
    </div>
  );
}


export default UserProfile;