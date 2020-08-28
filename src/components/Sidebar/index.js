import React from "react";
import { format } from "date-fns";
import "./styles.scss";

export default function Sidebar({ selectedDay }) {
    const selectedDayFormatted = format(selectedDay, "EEEE");
    const selectedDaySufix = format(selectedDay, "eo");

    return (
        <div className='sidebar'>
            <span className='sidebar__title'>
                <strong>{selectedDayFormatted}</strong>, {selectedDaySufix}
            </span>
            <div className='sidebar__body'>
                <div className='sidebar_reminders'></div>
            </div>
        </div>
    );
}
