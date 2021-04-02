import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="App">
      {/* NAV */}
      {/* <Route path="/" exact component={Polls} /> */}
      <Route path="/login" component={Login} />
      {/* /poll/:id */}
      {/* /leaderboard */}  
      {/* /new */}
    </div>
    </Router>
  );
}

export default App;
