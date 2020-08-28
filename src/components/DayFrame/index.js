import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isWeekend, format } from "date-fns";
import Reminder from "../Reminder";
import { compareByTime } from "../../services/utils";
import "./styles.scss";

export default function DayFrame({
    day,
    month,
    selectedMonth,
    selectedDay,
    setSelectedDay,
}) {
    const [reminders, setReminders] = useState([]);
    const isCurrentMonth = month === selectedMonth ? "blue" : "gray";
    const today = new Date(2020, month, day);
    const isDayWeekend = isWeekend(today) ? "isWeekendDay" : "isWeekDay";
    // const isDaySelected = selectedDay
    const todayFormatted = format(today, "dd/MM/yyyy");
    const remindersState = useSelector((state) => state.reminders);
    useEffect(() => {
        const reminds = remindersState.filter(
            (reminder) => reminder.startDateFormatted === todayFormatted
        );
        const remindersSortedByTime = reminds.sort(compareByTime);
        setReminders(remindersSortedByTime);
    }, [remindersState, todayFormatted]);

    return (
        <div
            className={`dayframe  ${isDayWeekend} ${isCurrentMonth}`}
            onClick={() => setSelectedDay(new Date(2020, month, day))}
        >
            <span
                className={`dayframe__container ${isDayWeekend} ${isCurrentMonth}`}
            >
                <strong>{day}</strong>
            </span>
            {reminders.map((reminder) => {
                return (
                    <Reminder reminder={reminder} key={reminder.reminderId} />
                );
            })}
        </div>
    );
}
