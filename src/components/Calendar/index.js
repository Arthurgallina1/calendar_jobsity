import React, { useState, useEffect } from "react";
import { getDaysInMonth, format, startOfMonth } from "date-fns";
import WeekBar from "../WeekBar";
import DayFrame from "../DayFrame";
import Modal from "../Modal";

import "./styles.scss";

export default function Calendar() {
    const [selectedMonth, setSelectedMonth] = useState(7);
    const [date, setDate] = useState(new Date(2020, selectedMonth));
    const [daysArray, setDaysArray] = useState([]);
    // console.debug("daysinM", daysInMonth);

    useEffect(() => {
        const daysInCurrentMonth = getDaysInMonth(new Date());
        const daysInPrevMonth = getDaysInMonth(
            new Date(2020, selectedMonth - 1, 1)
        );
        // console.debug("daysInPrevMonth", daysInPrevMonth);
        const firstDay = startOfMonth(date);
        const ISOFirstDay = format(firstDay, "i");

        let previousMonth = [];
        for (let i = 0; i < ISOFirstDay; i++) {
            previousMonth.push({
                day: `${daysInPrevMonth - i}`,
                month: selectedMonth - 1,
            });
        }
        previousMonth.reverse();
        let currentMonth = [];
        for (let i = 1; i <= daysInCurrentMonth; i++) {
            currentMonth.push({ day: `${i}`, month: selectedMonth });
        }
        let remainingDaySlots =
            42 - (previousMonth.length + currentMonth.length);
        let nextMonth = [];
        for (let i = 1; i <= remainingDaySlots; i++) {
            nextMonth.push({ day: `${i}`, month: selectedMonth + 1 });
        }
        let monthSlots = [...previousMonth, ...currentMonth, ...nextMonth];
        setDaysArray(monthSlots);
    }, [date]);

    useEffect(() => {
        setDate(new Date(2020, selectedMonth));
    }, [selectedMonth]);

    return (
        <div>
            {/* <button onClick={() => setSelectedMonth(9)}></button> */}
            <Modal />
            <WeekBar />
            <div className='calendar__container'>
                {daysArray.map((day, i) => (
                    <DayFrame
                        key={i}
                        day={day.day}
                        month={day.month}
                        selectedMonth={selectedMonth}
                    />
                ))}
            </div>
        </div>
    );
}
