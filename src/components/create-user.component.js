import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeNews = this.onChangeNews.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      username: '',
      genre: '',
      dob: 0,
      news: false,
      email:"",
      photo : ""
    }
  }

  

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
      
    })
    console.log(this.state.username)
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value
    })
  }

  onChangeDob(e) {
    this.setState({
      dob: e.target.value
    })
  }

  onChangeNews() {
    const s= this.state.news ? false : true
    this.setState({
      news : s
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePhoto(e) {
    this.setState({
      photo: e.target.value
    })
  }
  componentDidMount() {
    

  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      genre: this.state.genre,
      dob: this.state.dob,
      news: this.state.news,
      email:this.state.email,
      photo : this.state.photo
    }

    console.log(user);

    axios.post('http://localhost:5000/users/', user)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New user</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>
        <div className="form-group"> 
          <label>Genre: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}>          
                <option value="female">female</option>
                <option value="male">male</option>  
          </select>
        </div>
        <div className="form-group">
          <label>date of birthday: </label>
          <input  type="date"
              required
              className="form-control"
              value={this.state.date}
              onChange={this.onChangeDob}
              />
          
        </div>
        
        <div className="form-group">
          <label>email: </label>
          <input
          required
            className="form-control"
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </div>
        <div className="form-group">
          <label>photo: </label>
          <input
          required
            type="text"
            value={this.state.photo}
            onChange={this.onChangePhoto}
            className="form-control"
          />
        </div>
        <div className="form-group">
          
          <input
          
          className="form-check-input"
            type="checkbox"
            checked={this.state.news}
            ref="news"
            onChange={this.onChangeNews}
          />
          <label className="form-check-label" >news: </label>
        </div>
        <div className="form-group">
          <input type="submit" value="Create user" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}