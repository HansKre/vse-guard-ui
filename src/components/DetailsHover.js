import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'fixed',
        bottom: 0,
        right: '0px',
        left: '0px'
    },
    paper: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    grid: {
        minHeight: '100px',
        paddingTop: '10px'
    }
}));

const DetailsHover = ({ text }) => {

    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="lg">
            <Paper variant='outlined' className={classes.paper} >
                <Grid container spacing={2} justify='center' alignItems='center' className={classes.grid} >
                    <Typography>{text}</Typography>
                </Grid>
            </Paper>
        </Container>
    )
}

export default DetailsHover;