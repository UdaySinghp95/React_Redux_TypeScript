import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actionEnum from "../../store/action/action";
import StateType from "../../types/types/State";
import Action from "../../types/types/Action";
import Todo from "../Todo";
import fetchTodoList from "../../api/todo";

function Home() {
	const toDoList = useSelector(({ toDoList }: StateType) => toDoList);
	const dispatch = useDispatch();

	const addTodoList = (list: any) => {
		dispatch<Action>({
			type: actionEnum.Add_Todo,
			payload: {
				data: list,
			},
		});
	};

	const handleClick = () => {
		addTodoList([
			{
				id: 1,
				completed: false,
				title: "Reminding ",
				user: "Current User",
			},
		]);

		// fetchTodoList(addTodoList);
	};

	return (
		<div>
			<h1>Hello Redux + Typescript</h1>
			{toDoList.map((data, index) => (
				<Todo todo={data} key={index} />
			))}
			<button onClick={handleClick}>Add TODO</button>
		</div>
	);
}

export default Home;
