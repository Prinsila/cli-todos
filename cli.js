// index.js

const { Command } = require('commander');
const { listTodos, addTodo, updateTodo, deleteTodo } = require('./cliController');

const program = new Command();

program
  .command('list')
  .description('List all Todos')
  .action(listTodos);

program
  .command('add <todo>')
  .description('Add a new Todo')
  .action(addTodo);

program
  .command('update <id> <todo>')
  .description('Update a Todo')
  .action((id, todo) => {
    updateTodo(id, todo);
  });

program
  .command('delete <id>')
  .description('Delete a Todo')
  .action(deleteTodo);

program.parse(process.argv);
