import React from "react";
import Modal from "../ReminderModal";
import "./styles.scss";

export default function Reminder({ reminder }) {
    const handleEdit = () => {};
    return (
        <div
            style={{
                background: reminder.color,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "5px",
                padding: "0 4px",
                borderRadius: "4px",
                fontSize: "12px",
                marginBottom: "6px",
            }}
        >
            <span>{reminder.startTimeFormatted}</span>
            <Modal isEditting reminder={reminder} />
        </div>
    );
}
