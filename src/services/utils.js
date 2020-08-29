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

const data = {
    reminderId: "280820202019",
    description: "Party",
    startDate: "2020-08-28T23:19:58.154Z",
    startDateFormatted: "28/08/2020",
    startTime: "2020-08-28T23:19:58.154Z",
    startTimeFormatted: "20:19",
    color: "#fa28ff",
    city: "São Paulo",
};

export { compareByTime, getAndSortReminders, data };
