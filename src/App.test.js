import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { addReminder } from "./store/modules/Reminders/actions";
import {
    findByTestAttribute,
    storeFactory,
    initialState,
} from "./test/testUtils";
import reminders from "./store/modules/Reminders/reducer";

import Main from "./pages/main";
import DayFrame from "./components/DayFrame";
import { data } from "./services/utils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {};

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = mount(
        <Provider store={store}>
            <Main />
        </Provider>
    );
    return wrapper;
};

const setupDayFrame = (initiaprops = {}) => {
    const store = storeFactory(initialState);
    const setupProps = { ...defaultProps, ...initiaprops };
    const wrapper = mount(
        <Provider store={store}>
            <DayFrame {...setupProps} />
        </Provider>
    );
    return wrapper;
};

describe("test add reminder function", () => {
    test("renders add reminder button", () => {
        const wrapper = setup();
        // const component = wrapper.find("[data-test='add-btn']");
        const component = findByTestAttribute(wrapper, "add-btn");
        expect(component.length).toBe(1);
    });

    test("returns an action with right type", () => {
        const action = addReminder();
        expect(action).toEqual({ type: "@reminder/ADD_REMINDER" });
    });
    test("redux returns a non empty state upon receiving an action of type @reminder/ADD_REMINDER", () => {
        const newState = reminders([], {
            payload: data,
            type: "@reminder/ADD_REMINDER",
        });
        expect(newState.length).toBe(1);
    });

    test("renders a reminder when there's a reminder in redux", () => {
        const wrapper = setupDayFrame({
            day: 8,
            month: 7,
            selectedMonth: 7,
        });
        const reminder = findByTestAttribute(wrapper, "reminder");
        expect(reminder.length).toBe(1);
    });
});
