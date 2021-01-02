import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChecksTable from './ChecksTable';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'fixed',
        bottom: 0,
        right: '0px',
        left: '0px'
    },
    paper: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
    },
    grid: {
        minHeight: '100px',
        maxHeight: '50vh',
        overflowY: 'auto',
        paddingTop: '10px'
    },
    iconGrid: {
        textAlign: 'left'
    }
}));

const DetailsHover = ({ details, closeSelf }) => {

    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth='lg'>
            <Paper variant='outlined' className={classes.paper} >
                <Grid container spacing={2} justify='center' alignItems='center' className={classes.grid}>
                    <Grid item xs={1} className={classes.iconGrid}>
                        <IconButton aria-label='close' onClick={closeSelf}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='h4'>
                            Details
                        </Typography>
                    </Grid>
                    {details && Object.entries(details) && Object.entries(details)
                        .filter(([k, v]) => k !== 'env' && k !== '__typename')
                        .map(([k, v]) => {
                            if (k === 'checks') {
                                return (
                                    <Grid key={uuidv4()} item xs={12} >
                                        <ChecksTable checks={v} />
                                    </Grid>
                                )
                            } else {
                                return (
                                    <Grid key={uuidv4()} item xs={4} >
                                        <Typography >{`${k}: ${v}`}</Typography>
                                    </Grid>
                                )
                            }

                        })}
                </Grid>
            </Paper>
        </Container>
    )
}

export default DetailsHover;