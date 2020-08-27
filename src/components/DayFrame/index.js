import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDaysInMonth, isWeekend, format } from "date-fns";
import "./styles.scss";

export default function DayFrame({ day, month, selectedMonth }) {
    const [reminders, setReminders] = useState([]);
    const isCurrentMonth = month === selectedMonth ? "blue" : "gray";
    const today = new Date(2020, month, day);
    // const date = lightFormat(day, "yyyy-MM-dd");
    const isDayWeekend = isWeekend(today) ? "isWeekendDay" : "isWeekDay";
    const todayFormatted = format(today, "dd/MM/yyyy");
    const remindersState = useSelector((state) => state.reminders);
    useEffect(() => {
        const remind = remindersState.filter(
            (reminder) => reminder.startDateFormatted === todayFormatted
        );
        setReminders(remind);
    }, [remindersState, todayFormatted]);

    console.log(remindersState);
    return (
        <div className={`dayframe  ${isDayWeekend} ${isCurrentMonth}`}>
            <span
                className={`dayframe__container ${isDayWeekend} ${isCurrentMonth}`}
            >
                <strong>{day}</strong>
            </span>
            {reminders.map((reminder) => (
                <span>{reminder.description}</span>
            ))}
        </div>
    );
}
