import {createStore} from "redux";
import { CounterReducer } from "./Reducer";

export const store = createStore(CounterReducer);
