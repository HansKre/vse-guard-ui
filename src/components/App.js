import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/App.css';
import Dashboard from './Dashboard';
import Controls from './Controls';
import Footer from './Footer';

const App = () => {

  const [darkMode, setDarkMode] = React.useState(true);

  const currentTheme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  });

  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={currentTheme} >
        {/* Paper-component is required for theming */}
        <Paper style={{ minHeight: "100vh" }} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <Typography variant="h3">VSE-Guard-UI</Typography>
              </Card>
            </Grid>
            <Controls darkMode={darkMode} setDarkMode={setDarkMode} />
            <Dashboard />
            <Footer />
          </Grid>
        </Paper>
      </ThemeProvider >
    </Container>
  )
}

export default App;