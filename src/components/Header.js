import { AppBar, Icon, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { fontWeight } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    center: {
      paddingTop: theme.spacing(1),
      textAlign: 'center',
    },
    right: {
        paddingTop: theme.spacing(1),
        textAlign: 'right',
      },
  }));
  

  export default props => {
    const classes = useStyles();
  
    return (
    <AppBar position="static">
        <Toolbar  style={{background: 'linear-gradient(to right, #115A75, #41CCF8)'}}>
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={1}>
                        <IconButton edge="start" color="inherit" style={{ height: "100%"}}  aria-label="Menu" onClick={() => props.onOpenMenu()}>
                            <Icon>menu</Icon>
                        </IconButton>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography className={classes.center} variant="h6" style={{  fontWeight: "400",  justifyContent:'center', alignItems:'center', width: '100%'}}> Marvin </Typography>
                    </Grid>
                    <Grid item xs={2} style={{paddingLeft: '20px'}}>
                        <img className={classes.right} src="./cpfl_logo.png"  height="32px"  alt="Logo" />
                    </Grid>
                </Grid>
                
            </div>
            
            
        </Toolbar>
    </AppBar>

    
    
    
    );
    }