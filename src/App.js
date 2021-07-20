import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieProfile from "./pages/MovieProfile";
import BottomMenu from './components/BottomMenu'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:categoryName/:movieName">
          <MovieProfile />
        </Route>
      </Switch>
      <BottomMenu />
    </Router>
  );
}

export default App;
