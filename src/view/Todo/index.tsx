import React from "react";
import Todo from "../../types/Todo";

type TodoProps = {
	todo: Todo;
};

function index({ todo }: TodoProps) {
	return (
		<div>
			<h3>{todo.title}</h3>
			<p>{todo.user}</p>
			<p>{todo.id}</p>
			<p>{todo.completed}</p>
		</div>
	);
}

export default index;
