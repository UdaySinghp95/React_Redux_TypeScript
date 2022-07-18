import actionEnum from "../action/action";
import ActionType from "../../types/types/Action";
import StateType from "../../types/types/State";

const initialS: StateType = { toDoList: [] };

export function reducer(
	initialState: StateType = initialS,
	action: ActionType
): StateType {
	switch (action.type) {
		case actionEnum.Add_Todo:
			initialState = {
				...initialState,
				toDoList: [...initialState.toDoList, ...action.payload.data],
			};
			break;
		case actionEnum.Get_Todo:
			console.log("Getting the listing");
			break;
		default:
			console.log("Using the default list");
			break;
	}

	return initialState;
}

export default reducer;
