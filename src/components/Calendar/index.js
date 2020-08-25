import React from "react";
import WeekBar from "../WeekBar";
import DayFrame from "../DayFrame";
import "./styles.scss";

const monthDays = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
];

export default function Calendar() {
    return (
        <div>
            <WeekBar />
            <div className='calendar__container'>
                {monthDays.map((day) => (
                    <DayFrame day={day} />
                ))}
            </div>
        </div>
    );
}