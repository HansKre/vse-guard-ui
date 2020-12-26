import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Controls = ({ darkMode, setDarkMode }) => {
    return (
        <Grid item xs={12}>
            <Paper>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={2}>
                        <FormControlLabel
                            control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
                            label="Dark Mode"
                        />
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "left" }}>
                        <Button variant='contained' color='primary' onClick={() => alert('foo')} >Spring</Button>
                        <Button variant='contained' color='primary'>Check</Button>
                        <Button variant='contained' color='secondary'>Analyse</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Controls;