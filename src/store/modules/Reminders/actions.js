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

export function deleteReminder(reminderId) {
    return {
        type: "@reminder/DELETE_REMINDER",
        payload: reminderId,
    };
}

export function deleteDayReminder(day) {
    return {
        type: "@reminder/DELETE_DAY_REMINDER",
        payload: day,
    };
}
