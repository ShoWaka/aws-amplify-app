import React from "react";

const Todo = ({ todo }) => {
	return (
		<div>
			<label>
				<input
					name="completed"
					type="checkbox"
					checked={todo.completed}
					readOnly
				/>
			</label>
			{todo.name}
		</div>
	);
};

export default Todo;
