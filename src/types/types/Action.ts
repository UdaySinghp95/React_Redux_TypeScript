import actionEnum from "../../store/action/action";
import Todo from "../Todo";

type ActionType = {
	type: actionEnum;
	payload: {
		data: Todo[];
	};
};

export default ActionType;
