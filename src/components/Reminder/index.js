import React from "react";
import Modal from "../ReminderModal";

export default function Reminder({ reminder }) {
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
