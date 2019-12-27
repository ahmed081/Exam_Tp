const router = require('express').Router();
let Users = require('../models/model.users');

const offset = 10;
//{username,genre,dob,news,email,photo}


router.route('/page/:size').get((req, res) => {
  const {page,size} = req.params
  Users.find( )
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});
//add user  
router.route('/').post((req, res) => {
  const {username,genre,dob,news,email,photo} = req.body;

  const users = new Users({
    username,genre,dob,news,email,photo
  });

  users.save()
  .then(() => res.json('user added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


//get user by id
router.route('/:id').get((req, res) => {
  Users.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});



//delete user
router.route('/:id').delete((req, res) => {
  Users.findByIdAndDelete(req.params.id)
    .then(() => res.json('user deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//count users 
router.route('/count').get((req, res) => {
  
  Users.find().count()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

//update user
router.route('/:id').put((req, res) => {
  const {username,genre,dob,news,email,photo} = req.body;

  

  Users.findById(req.params.id)
    .then(user => {
      user.username = username;
      user.genre = genre;
      user.dob = dob;
      user.news = news;
      user.email = email;  
      user.photo = photo
      
      user.save()
        .then(() => res.json('user updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;