import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

// configuration options from default-theme: https://material-ui.com/customization/default-theme/
// https://cimdalli.github.io/mui-theme-generator/
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FF4081
// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
// https://material-ui.com/customization/color/
// https://in-your-saas.github.io/material-ui-theme-editor/
const DarkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: cyan[700],
            contrastText: '#303030'
        },
        secondary: {
            main: pink['A200'],
            contrastText: '#303030'
        }
    },
    typography: {
        // TODO: switch to fancy google font
        fontFamily: 'Comic Sans MS',
        body2: {
            fontSize: '1.1rem'
        }
    },
    shape: {
        borderRadius: 10
    },
    // CSS styles
    overrides: {
        MuiButton: {
            root: {
                // textTransform: 'none'
            }
        }
    },
    // default props
    props: {
        MuiButton: {
            variant: 'contained',
        }
    }
});

export default DarkTheme;