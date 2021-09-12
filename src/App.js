import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import UserHome from './pages/userHome/UserHome'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <UserHome />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
