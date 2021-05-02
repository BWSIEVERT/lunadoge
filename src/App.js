import React from 'react'

// Stylesheet
import './App.css'

// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Components
import Home from './Components/Home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
