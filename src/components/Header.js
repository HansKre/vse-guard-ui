import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Header = () => {
    return (
        <Grid item xs={12}>
            <Card>
                <Typography variant="h3">VSE-Guard-UI</Typography>
            </Card>
        </Grid>
    )
}

export default Header;