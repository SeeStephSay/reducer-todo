import React, { useReducer, useState } from 'react';

function Todo() {
	const [ todos, dispatch ] = useReducer(reducer, initialState);
	const [ formValue, setFormValue ] = useState('');

	return (
		<div className='search-text'>
			<form>
				<input value={formValue} onChange={onChange} type='text' />
				<button onClick={addTodo} type='submit'>
					Enter
				</button>
			</form>

			<button onClick={clearCompleted}>Clear Completed</button>
			{todos ? (
				todos.map((todo) => (
					<p
						className={`task$todo.completed ? 'completed' : ''}`}
						style={{ textDecoration: todo.completed ? 'line-through' : '' }}
						key={todo.id}
						onClick={markComplete(todo.id)}>
						{todo.item}
					</p>
				))
			) : null}
		</div>
	);
}

export default Todo;
