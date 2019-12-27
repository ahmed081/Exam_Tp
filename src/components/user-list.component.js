import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EditLink =function()
{
  console.log("ddd");
}
/*
 <Button onClick={EditLink}>edit</Button>
      <Button onClick={() => { props.deleteMovie(props.exercise._id) }}>edit</Button>

*/
const Users = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.genre}</td> 
    <td>{props.user.dob}</td>
    <td>{props.user.news?"true" : "false"}</td>
    <td>{props.user.email  }</td>
    <td><img src = {props.user.photo}/></td>
    
    
    <td>
     
      <Link to={"/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
      
      </td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this)

    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/page/88')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.users.map(currentuser => {
      return <Users user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>all Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>gendre</th>
              <th>date of birthday</th>
              <th>news</th>
              <th>email</th>
              <th>photo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
    )
  }
}