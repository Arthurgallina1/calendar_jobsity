import React from "react";
import Modal from "../ReminderModal";
import { FaCircle } from "react-icons/fa";
import "./styles.scss";

export default function Reminder({ reminder }) {
    return (
        <div className='reminder__info'>
            <FaCircle size={12} color={reminder.color} />
            <span>{reminder.startTimeFormatted}</span>
            <Modal isEditting reminder={reminder} />
        </div>
    );
}
