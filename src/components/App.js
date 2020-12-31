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
import createCustomTheme from '../styles/CustomTheme';
import { ApolloProvider } from '@apollo/react-hooks';
import graphQlClient from './GraphQlClient';

const App = () => {

  const [darkMode, setDarkMode] = React.useState(true);

  const simpleSwitchableTheme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  });

  return (
    <ApolloProvider client={graphQlClient}>
      <Container maxWidth="lg">
        <ThemeProvider theme={createCustomTheme(darkMode) || simpleSwitchableTheme} >
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
    </ApolloProvider >
  )
}

export default App;