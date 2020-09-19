import React from 'react';
import Home from './Containers/Home/Home'
import CreateQuiz from './Containers/Createquizz/CreateQuiz'
import NewBook from './Containers/Addabook/NewBook'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Route} from 'react-router-dom'
import TakeQuiz from './Containers/TakeQuiz/TakeQuiz'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute'
import Login from './Containers/Login/Login'
import SignUp from './SignUp'
import AdminPanel from './Containers/AdminPanel/AdminPanel'

const App = props => {

  return (
    <AuthProvider>
      <Router>
      <div>
        <Route path="/" exact component = {Home} />
        <PrivateRoute path="/adminpanel" exact component = {AdminPanel} />
        <Route path="/Login" exact component = {Login} />
        <Route path="/Signup" exact component = {SignUp} />
        <PrivateRoute path="/createquiz" exact component = {CreateQuiz} />
        <PrivateRoute path="/takequiz" exact component = {TakeQuiz} />
        <PrivateRoute path="/newbookform" exact component = {NewBook} />
      </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
