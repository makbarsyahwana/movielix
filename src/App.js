import logo from './logo.svg';
import './App.css';
import MovieList from './page/movieList';
import MovieDetails from './page/movieDetails';
import { Router, Route, Switch, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();

function App() {
  return (
        <div className='App'>
            <Switch>
              <Route exact path="/" component={MovieList} />
              <Route path="/:movieName" component={MovieDetails} />
            </Switch>
        </div>
  );
}

export default App;
