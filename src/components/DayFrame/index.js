import React from "react";
import { getDaysInMonth, isWeekend, lightFormat } from "date-fns";
import "./styles.scss";

export default function DayFrame({ day, month, selectedMonth }) {
    const isCurrentMonth = month === selectedMonth ? "blue" : "gray";
    // const date = lightFormat(day, "yyyy-MM-dd");
    const isDayWeekend = isWeekend(new Date(2020, month, day))
        ? "isWeekendDay"
        : "isWeekDay";

    // console.log(getDaysInMonth(new Date()));
    return (
        <div className={`dayframe  ${isDayWeekend} ${isCurrentMonth}`}>
            <span
                className={`dayframe__container ${isDayWeekend} ${isCurrentMonth}`}
            >
                <strong>{day}</strong>
            </span>
        </div>
    );
}
