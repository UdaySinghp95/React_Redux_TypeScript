import axios from "axios";
import Todo from "../types/Todo";

async function fetchTodoList(cb: Function) {
	try {
		const { data, status } = await axios.get(
			"https://jsonplaceholder.typicode.com/todos"
		);

		cb(data);
	} catch (e) {
		console.log(e);
	}
}

export default fetchTodoList;
