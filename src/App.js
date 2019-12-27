import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import UserList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";
import generateUser from "./components/generate-User.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={UserList} />
      <Route path="/create" component={CreateUser} />
      <Route path="/mook" component={generateUser} />
      <Route path="/:id" component={EditUser} />
      
      
      </div>
    </Router>
  );
}

export default App;
//<Route path="/:id" component={EditUser} />