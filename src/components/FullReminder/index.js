import React from "react";
import Modal from "../ReminderModal";
import { FaCircle } from "react-icons/fa";
import "./styles.scss";

export default function Reminder({ reminder }) {
    return (
        <div className='fullreminder'>
            <div className='fullreminder__ball'>
                <FaCircle size={15} color={reminder.color} />
            </div>
            <div className='fullreminder_title'>
                <span>{reminder.description}</span>
                <small>{reminder.startTimeFormatted}</small>
            </div>
            <div className='fullreminder_weather'>
                <span>{reminder.city}</span>
                {/* <small>{reminder.startTimeFormatted}</small> */}
            </div>
            <div className='fullreminder_edit'>
                <Modal isEditting reminder={reminder} />
            </div>
        </div>
    );
}
