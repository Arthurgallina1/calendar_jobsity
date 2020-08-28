import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import Modal from "../ReminderModal";
import FullReminder from "../FullReminder";
import "./styles.scss";

import { getAndSortReminders } from "../../services/utils";

export default function Sidebar({ selectedDay }) {
    const [reminders, setReminders] = useState([]);
    const selectedWeekDayFormatted = format(selectedDay, "iiii");
    const selectedDayFormatted = format(selectedDay, "dd/MM/yyyy");
    const selectedDaySufix = format(selectedDay, "do");
    const allReminders = useSelector((state) => state.reminders);
    useEffect(() => {
        const sortedReminders = getAndSortReminders(
            allReminders,
            selectedDayFormatted
        );
        setReminders(sortedReminders);
    }, [allReminders, selectedDayFormatted]);

    return (
        <div className='sidebar'>
            <span className='sidebar__title'>
                <strong>{selectedWeekDayFormatted}</strong>, {selectedDaySufix}
            </span>
            <div className='sidebar__body'>
                <div className='sidebar_reminders'>
                    {reminders.map((reminder) => (
                        <FullReminder
                            reminder={reminder}
                            key={reminder.reminderId}
                        />
                    ))}
                </div>
            </div>
            <div className='sidebar_footer'>
                <Modal />
            </div>
        </div>
    );
}
