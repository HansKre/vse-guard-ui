import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/App.css';
import Dashboard from './Dashboard';
import Controls from './Controls';
import Footer from './Footer';
import Header from './Header';
import DarkTheme from '../styles/DarkTheme';
import LightTheme from '../styles/LightTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DataProvider from './DataProvider';

const App = () => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState(undefined);

  const theme = React.useMemo(
    () => {
      if (darkMode === undefined) {
        setDarkMode(prefersDarkMode);
        return prefersDarkMode ? DarkTheme : LightTheme;
      } else {
        return darkMode ? DarkTheme : LightTheme;
      }
    },
    [prefersDarkMode, darkMode],
  );

  return (
    <DataProvider>
      <Container maxWidth="lg">
        <ThemeProvider theme={theme} >
          {/* Paper-component is required for theming */}
          <Paper style={{ minHeight: "100vh" }} >
            <Grid container spacing={2} justify='center'>
              <Header />
              <Controls darkMode={darkMode} setDarkMode={setDarkMode} />
              <Dashboard />
              <Footer />
            </Grid>
          </Paper>
        </ThemeProvider >
      </Container>
    </DataProvider >
  )
}

export default App;