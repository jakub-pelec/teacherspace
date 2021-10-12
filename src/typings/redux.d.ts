import { Action } from "redux";

interface ActionWithPayload<T> extends Action {
	payload: T;
}
