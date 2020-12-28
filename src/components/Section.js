import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DataCard from './DataCard';

const Section = ({ section }) => {

    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h4">{section.title}</Typography>
            </Grid>
            {section.dataCards.map(dataCard => {
                return (
                    <Grid key={uuidv4()} item xs={4}>
                        <DataCard key={uuidv4()} dataCard={dataCard} />
                    </Grid>
                )
            })}
        </>
    )
}

export default Section;