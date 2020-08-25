import React from "react";
import { getDaysInMonth } from "date-fns";
import "./styles.scss";

export default function DayFrame({ day }) {
    const isWeekend = day % 2 === 0 ? "isWeekendDay" : "isWeekDay";
    console.log(getDaysInMonth(new Date()));
    return (
        <div className={`dayframe ${isWeekend}`}>
            <span className={`dayframe__container ${isWeekend}`}>
                <strong>{day}</strong>
            </span>
        </div>
    );
}
