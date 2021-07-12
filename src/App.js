import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from './Login/login';
import UserList from './UserList/userList';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/user-list" component={UserList}/>
      </Switch>
    </Router>
  );
}

const mapStateToPros = state => {
  return {
    count: state
  };
};

export default connect(mapStateToPros)(App);
