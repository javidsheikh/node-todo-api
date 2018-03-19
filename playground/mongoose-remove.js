const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')


// Todo.remove({}, (result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5aafc39ce2d93ed7c27d61e1').then((todo) => {
  console.log(todo);
})
