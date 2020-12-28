import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Section from './Section';
import fetchFrom from '../helpers/fetchFrom';
import Config from '../config';

const Dashboard = () => {

    const [sections, setSections] = useState(undefined);

    useEffect(() => {
        fetchFrom(Config.BASE_URL + '/api/apps', (response) => {
            setSections(response);
        });
    }, []);

    return (
        <Grid item xs={12} container spacing={2}>
            {sections && sections.map(section => {
                return (
                    <Section key={uuidv4()} section={section} />
                )
            })}
        </Grid>
    )
}

export default Dashboard;