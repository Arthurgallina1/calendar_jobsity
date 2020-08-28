export function addReminder(data) {
    return {
        type: "@reminder/ADD_REMINDER",
        payload: data,
    };
}

export function editReminder(data) {
    return {
        type: "@reminder/EDIT_REMINDER",
        payload: data,
    };
}
