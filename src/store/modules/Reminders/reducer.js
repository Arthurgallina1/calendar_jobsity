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

        case "@reminder/DELETE_REMINDER":
            return state.filter(
                (reminder) => reminder.reminderId !== action.payload
            );

        case "@reminder/DELETE_DAY_REMINDER":
            return state.filter(
                (reminder) => reminder.startDateFormatted !== action.payload
            );

        default:
            return state;
    }
}
