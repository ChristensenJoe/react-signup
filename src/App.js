//Dependency Imports
import { ThemeProvider } from '@material-ui/core'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

//Local Imports
import theme from './Themes/theme.js'
import SignupRoutes from './Pages/RouteManagers/SignupRoutes.js'
import StartingPage from './Pages/StartingPage.js'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>

          <Route path="/signup">
            <SignupRoutes />
          </Route>
          <Route exact path="/">
            <StartingPage />
          </Route>

        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
