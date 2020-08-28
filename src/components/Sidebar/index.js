import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import Modal from "../ReminderModal";
import { deleteDayReminder } from "../../store/modules/Reminders/actions";
import FullReminder from "../FullReminder";
import "./styles.scss";

import { getAndSortReminders } from "../../services/utils";

export default function Sidebar({ selectedDay }) {
    const [reminders, setReminders] = useState([]);
    const selectedWeekDayFormatted = format(selectedDay, "iiii");
    const selectedDayFormatted = format(selectedDay, "dd/MM/yyyy");
    const selectedDaySufix = format(selectedDay, "do");
    const allReminders = useSelector((state) => state.reminders);
    const dispatch = useDispatch();

    useEffect(() => {
        const sortedReminders = getAndSortReminders(
            allReminders,
            selectedDayFormatted
        );
        setReminders(sortedReminders);
    }, [allReminders, selectedDayFormatted]);

    const handleDelete = () => {
        dispatch(deleteDayReminder(selectedDayFormatted));
    };

    return (
        <div className='sidebar'>
            <span className='sidebar__title'>
                <strong>{selectedWeekDayFormatted}</strong>, {selectedDaySufix}
                <FaTrash color={"#F14764"} size={14} onClick={handleDelete} />
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
