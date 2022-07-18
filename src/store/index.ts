import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";

const store = createStore(
	reducer,
	applyMiddleware(
		thunk.withExtraArgument(() => console.log("Thunks middleware calling"))
	)
);

export default store;
