import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Section from './Section';
import { useQuery } from '@apollo/react-hooks';
import Queries from '../queries/queries';

const Dashboard = () => {

    // const { loading, error, data } = useQuery(Queries.GET_WEATHER);
    // const q2 = useQuery(Queries.GET_WEATHER_FOR, { variables: { name: 'Sindelfingen' } });
    const { loading, error, data } = useQuery(Queries.GET_SECTIONS);

    return (
        <Grid item xs={12} container spacing={2} justify='center'>
            {data && data.getSections && data.getSections.map(section => {
                return (
                    <Section key={uuidv4()} section={section} />
                )
            })}
        </Grid>
    )
}

export default Dashboard;