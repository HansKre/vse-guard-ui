import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import TheatersIcon from '@material-ui/icons/Theaters';
import IconButton from '@material-ui/core/IconButton';

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

const Header = ({ darkMode, setDarkMode }) => {

    const classes = useStyles();

    // navigate on click showcase
    // TODO: fixed position
    // TODO: dark bar on top
    // TODO: shrink on scroll
    return (
        <Grid container className={classes.root}>
            <AppBar position='static'>
                <ToolBar>
                    <Typography variant='h4' className={classes.title}>VSE-Guard-UI</Typography>
                    <IconButton>
                        <TheatersIcon color='secondary' />
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

export default Header;