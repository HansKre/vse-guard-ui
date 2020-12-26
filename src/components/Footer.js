import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <Grid item xs={12}>
            <Typography variant="h5">
                <Link href="https://git.daimler.com/vse-monitoring" target="_blank">
                    <GitHubIcon /> Repo
                  {/* TODO: center Repo-label vertically */}
                    {/* TODO: change font color to something more readable */}
                </Link>
            </Typography>
        </Grid>
    )
}

export default Footer;