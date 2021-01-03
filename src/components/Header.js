import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import TheatersIcon from '@material-ui/icons/Theaters';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'left'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = ({ darkMode, setDarkMode, history, location }) => {

    const classes = useStyles();

    const navigate = (url) => {
        history.push(url);
    }

    // TODO: fixed position
    // TODO: dark bar on top
    // TODO: shrink on scroll
    return (
        <Grid container className={classes.root}>
            <AppBar position='static'>
                <ToolBar>
                    <Typography variant='h4' className={classes.title}>VSE-Guard-UI</Typography>
                    <IconButton>
                        {location.pathname === '/' && <TheatersIcon color='secondary' onClick={() => navigate('/showcase')} />}
                        {location.pathname === '/showcase' && <HomeIcon color='secondary' onClick={() => navigate('/')} />}
                    </IconButton>
                    <FormControlLabel
                        control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
                        label="Dark Mode"
                    />
                </ToolBar>
            </AppBar>
        </Grid>
    )
}

export default withRouter(Header);