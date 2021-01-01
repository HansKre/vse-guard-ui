import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Section from './Section';
import { useQuery } from '@apollo/react-hooks';
import Queries from '../queries/queries';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(Queries.GET_APPS);

    const extractSections = (apps) => {
        const sections = apps.map(app => app.layer).filter((layer, index, self) => {
            // return first-time occurance only
            return self.indexOf(layer) === index;
        });
        return sections;
    }

    if (loading) {
        return (
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    } else if (error) {
        console.log(error);
        return (
            <Typography key={uuidv4()}>{error.message}</Typography>
        )
    } else {
        return (
            <Grid item xs={12} container spacing={2} justify='center'>
                {data && extractSections(data.apps).map(section => {
                    return (
                        <Section key={uuidv4()} section={section} apps={data.apps} />
                    )
                })}
            </Grid>
        )
    }
}

export default Dashboard;