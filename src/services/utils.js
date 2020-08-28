const compareByTime = (a, b) => {
    if (a.startTimeFormatted < b.startTimeFormatted) {
        return -1;
    }
    if (a.startTimeFormatted > b.startTimeFormatted) {
        return 1;
    }
    return 0;
};

const getAndSortReminders = (allReminders, dayFormatted) => {
    // console.debug("allReminders", allReminders);
    // console.debug("dayFormatted", dayFormatted);
    const reminders = allReminders.filter(
        (reminder) => reminder.startDateFormatted === dayFormatted
    );
    return reminders.sort(compareByTime);
};

export { compareByTime, getAndSortReminders };
