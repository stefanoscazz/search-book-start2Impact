import "./App.css";
import {BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import BookDescription from "./pages/BookDescription";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#263238',
      },
      secondary: {
        main: '#e0e0e0',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
    <Router >
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/description" component={BookDescription}></Route>
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
    
  );
};

export default App;
