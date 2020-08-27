import createStore from "./createStore";
import rootReducer from "./modules/rootReducer";

const middlewares = [];

const store = createStore(rootReducer, middlewares);

export default store;
