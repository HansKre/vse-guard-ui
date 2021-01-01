import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppsCard from './AppsCard';

const Section = ({ section, apps }) => {

    console.log('section re-render');

    return (
        <>
            <Grid item xs={12}>
                <Typography variant='h4'>{section}</Typography>
            </Grid>
            {apps && apps.filter(app => app.layer === section).map(app => {
                return (
                    <Grid key={uuidv4()} item xs={4}>
                        <AppsCard key={uuidv4()} app={app} />
                    </Grid>
                )
            })}
        </>
    )
}

export default Section;