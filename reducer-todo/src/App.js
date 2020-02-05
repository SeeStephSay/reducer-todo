import React from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Reducer To-Do</h1>
			<Todo />
			<h5>Tip: Click to-do item to mark it as completed.</h5>
		</div>
	);
}

export default App;
