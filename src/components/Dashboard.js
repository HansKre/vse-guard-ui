import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Section from './Section';
import { useQuery } from '@apollo/react-hooks';
import Queries from '../queries/queries';

const Dashboard = () => {

    // const { loading, error, data } = useQuery(Queries.GET_WEATHER);
    // const q2 = useQuery(Queries.GET_WEATHER_FOR, { variables: { name: 'Sindelfingen' } });
    const { loading, error, data } = useQuery(Queries.GET_APPS);

    const extractSections = (apps) => {
        const sections = apps.map(app => app.layer).filter((layer, index, self) => {
            // return first-time occurance only
            return self.indexOf(layer) === index;
        });
        return sections;
    }

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

export default Dashboard;