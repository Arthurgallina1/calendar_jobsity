import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { addReminder } from "./store/modules/Reminders/actions";
import reminders from "./store/modules/Reminders/reducer";

import Main from "./pages/main";
import ReminderModal from "./components/ReminderModal";
import { data } from "./services/utils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("test add reminder", () => {
    test("returns an action with right type", () => {
        const action = addReminder();
        expect(action).toEqual({ type: "@reminder/ADD_REMINDER" });
    });
    test("redux returns a non empty state upon receiving an action of type @reminder/ADD_REMINDER", () => {
        const newState = reminders([], {
            payload: data,
            type: "@reminder/ADD_REMINDER",
        });
        expect(newState).toHaveProperty("payload");
    });
});
