const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = '6aabc86130ab456e1c916641111';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => {
//   console.log(e);
// });

var id = '5aabe3a63e1268d04b49790a1';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User', user);
}).catch((e) => {
  console.log(e.message);
})
