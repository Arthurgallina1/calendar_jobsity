const INITIAL_STATE = [];

export default function reminders(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "@reminder/ADD_REMINDER":
            return [...state, action.payload];

        case "@reminder/EDIT_REMINDER":
            return state.map((reminder) => {
                if (reminder.reminderId === action.payload.reminderId) {
                    return { ...action.payload };
                }
                return reminder;
            });

        default:
            return state;
    }
}
