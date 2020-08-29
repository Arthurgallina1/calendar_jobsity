import { createStore, applyMiddleware } from "redux";

import rootReducer from "../store/modules/rootReducer";
import { middlewares } from "./store";

export const initialState = {
    reminders: [
        {
            reminderId: "080820201023",
            description: "teste",
            startDate: "2020-08-08T13:23:41.000Z",
            startDateFormatted: "08/08/2020",
            startTime: "2020-08-29T13:23:41.164Z",
            startTimeFormatted: "10:23",
            color: "#D33115",
            city: "Chapecó",
        },
        {
            reminderId: "080820201024",
            description: "teste",
            startDate: "2020-08-07T13:24:34.000Z",
            startDateFormatted: "08/07/2020",
            startTime: "2020-08-07T13:24:34.994Z",
            startTimeFormatted: "10:24",
            color: "#D33115",
            city: "Pato Branco",
        },
    ],
};

export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(
        createStore
    );
    return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttribute = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
};
