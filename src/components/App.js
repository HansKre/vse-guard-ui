import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import '../styles/App.css';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import DarkTheme from '../styles/DarkTheme';
import LightTheme from '../styles/LightTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DataProvider from './DataProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShowCase from './ShowCase';

const App = () => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState(false); // initial value is required for controlled components

  // will run after the render is committed to the screen
  React.useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  // will memoize theme to be re-calculated only when dependencies change
  const theme = React.useMemo(
    () => {
      return darkMode ? DarkTheme : LightTheme;
    },
    [darkMode],
  );

  return (
    <DataProvider>
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <Container maxWidth="lg">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            {/* Paper-component is required for theming */}
            <Paper style={{ minHeight: "100vh" }} >
              <Grid container spacing={2} justify='center'>
                {/* TODO: animate page transitions */}
                <Switch>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route path="/showcase">
                    <ShowCase />
                  </Route>
                </Switch>
                <Footer />
              </Grid>
            </Paper>
          </Container>
        </BrowserRouter>
      </ThemeProvider >
    </DataProvider >
  )
}

export default App;