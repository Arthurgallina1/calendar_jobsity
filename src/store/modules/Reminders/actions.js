export function addReminder(data) {
    return {
        type: "@reminder/ADD_REMINDER",
        payload: data,
    };
}
