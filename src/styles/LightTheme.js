import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const LightTheme = createMuiTheme({
    props: {
        MuiButton: {
            variant: 'contained',
        }
    }
});

export default LightTheme;