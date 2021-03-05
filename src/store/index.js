import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import randomId from "../middlewares/randomid";
import api from "../middlewares/api";

const enhancer = applyMiddleware(thunk, randomId, api);

const store = createStore(reducer, enhancer);

export default store;
