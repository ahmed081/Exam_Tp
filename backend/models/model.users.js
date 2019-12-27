const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  username: { type: String, required: true },
  genre: { type: String, required: true },
  dob: { type: Date, required: true },
  news: { type: Boolean, required: true },
  email: { type: String, required: true },
  photo: { type: String, required: true }
}, {
  timestamps: true,
});




const users = mongoose.model('users', movieSchema);

module.exports = users;