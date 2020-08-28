import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isWeekend, format } from "date-fns";
import Reminder from "../Reminder";
import { getAndSortReminders } from "../../services/utils";
import "./styles.scss";

export default function DayFrame({
    day,
    month,
    selectedMonth,
    selectedDay,
    setSelectedDay,
}) {
    const [reminders, setReminders] = useState([]);
    const isCurrentMonth = month === selectedMonth ? "current" : "gray";
    const today = new Date(2020, month, day);
    const isDayWeekend = isWeekend(today) ? "isWeekendDay" : "isWeekDay";
    // const isDaySelected = selectedDay
    const todayFormatted = format(today, "dd/MM/yyyy");
    const allReminders = useSelector((state) => state.reminders);
    useEffect(() => {
        const sortedReminders = getAndSortReminders(
            allReminders,
            todayFormatted
        );
        setReminders(sortedReminders);
    }, [allReminders, todayFormatted]);

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
