const compareByTime = (a, b) => {
    if (a.startTimeFormatted < b.startTimeFormatted) {
        return -1;
    }
    if (a.startTimeFormatted > b.startTimeFormatted) {
        return 1;
    }
    return 0;
};

export { compareByTime };
