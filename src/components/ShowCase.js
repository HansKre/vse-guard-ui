import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Section from './showcase/Section';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import fetchFrom from '../helpers/fetchFrom';
import Config from '../config';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

let fetchCache;

const ShowCase = () => {

    console.log('showcase re-render');

    const classes = useStyles();

    const [sections, setSections] = React.useState(undefined);
    const [error, setError] = React.useState(undefined);

    React.useEffect(() => {
        if (!fetchCache) {
            console.log('fetching');
            fetchFrom(Config.BASE_URL + '/api/apps',
                (response) => {
                    fetchCache = response;
                    setSections(response);
                },
                (error) => setError(error)
            );
        } else {
            setSections(fetchCache);
        }
    }, []);


    if (!sections && !error) {
        return (
            <Backdrop className={classes.backdrop} open={!sections}>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    } else if (error) {
        return (
            <Grid item xs>
                <Typography key={uuidv4()}>{error}</Typography>
            </Grid>
        )
    } else {
        return (
            <Grid item xs={12} container spacing={2} justify='center'>
                {sections && sections.map(section => {
                    return (
                        <Section key={uuidv4()} section={section} />
                    )
                })}
            </Grid>)
    }
}

export default ShowCase;