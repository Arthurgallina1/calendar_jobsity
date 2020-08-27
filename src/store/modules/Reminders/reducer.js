const INITIAL_STATE = [];

export default function reminders(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "@reminder/ADD_REMINDER":
            return [...state, action.payload];

        default:
            return state;
    }
}
