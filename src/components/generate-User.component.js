import React from 'react';
import Axios from 'axios';

export default class UserProfiles extends React.Component {
  constructor(){
    super();
    this.state = {
        users : [],
        nbr:0
    }
   
    this.getusers = this.getusers.bind(this);
  }

  componentWillMount() {
    Axios.get('http://localhost:5000/users/page/88')
      .then(response => {
          
        this.setState({ users: response.data })
        const nb = this.state.users.length
        this.setState({ nbr: nb})
      })
      .catch((error) => {
        console.log(error);
      });
      
  }

  getusers() {
    
    
      while(this.state.nbr<100)
      {
        fetch('https://randomuser.me/api/')
        .then(response => {
          if(response.ok) 
          {
              return response.json();
          }
          throw new Error('Request failed.');
        })
        .then(data => {
           const user = {
                username: data.results[0].name.title ,
                genre: data.results[0].gender ,
                dob: data.results[0].dob.date ,
                news: true,
                email:data.results[0].email ,
                photo : data.results[0].picture.thumbnail
                
            }
            Axios.get('http://localhost:5000/users/page/88')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
        console.log(this.state.users)
            Axios.post('http://localhost:5000/users/', user)
            .then(res => console.log(res.data));
            
            
        })
        .catch(error => {
          console.log(error);
        }); 
        console.log(this.state.nbr);
        const nb = this.state.nbr+1
       this.setState({
            nbr : nb
       });
        
      }
      setTimeout(() => {
          window.location = '/';
      }, 3000);
      
    
  }

  render() {
    return (
      
	<div className="form-group">
        
    <div>nombre des utilisateurs {this.state.users.length}</div><br/>
    <a href="#" onClick={this.getusers}>
      Générate
    </a>

	</div>
    
    );
  }
}

