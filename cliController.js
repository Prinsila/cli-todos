// cliController.js

const axios = require('axios');

// Function to list all todos
async function listTodos() {
  try {
    const response = await axios.get('http://localhost:3000/todos');
    console.log('Todos:');
    response.data.forEach(todo => {
      console.log(`- ${todo.id}: ${todo.text}`);
    });
  } catch (error) {
    console.error('Failed to fetch Todos:', error.message);
  }
}

// Function to add a new todo
async function addTodo(text) {
  try {
    const response = await axios.post('http://localhost:3000/todos', { text });
    console.log('Todo added:');
    console.log(`- ${response.data.id}: ${response.data.text}`);
  } catch (error) {
    console.error('Failed to add Todo:', error.message);
  }
}

// Function to update a todo
async function updateTodo(id, newText) {
  try {
    await axios.put(`http://localhost:3000/todos/${id}`, { text: newText });
    console.log(`Todo with ID ${id} updated.`);
  } catch (error) {
    console.error('Failed to update Todo:', error.message);
  }
}

// Function to delete a todo
async function deleteTodo(id) {
  try {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    console.log(`Todo with ID ${id} deleted.`);
  } catch (error) {
    console.error('Failed to delete Todo:', error.message);
  }
}

module.exports = {
  listTodos,
  addTodo,
  updateTodo,
  deleteTodo
};
