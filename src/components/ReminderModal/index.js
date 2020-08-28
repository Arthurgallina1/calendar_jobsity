import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { format } from "date-fns";
import { FaEdit } from "react-icons/fa";
import DatetimePicker from "../DatetimePicker";
import Timepicker from "../Timepicker";
import Colorpicker from "../Colorpicker";
import {
    addReminder,
    editReminder,
} from "../../store/modules/Reminders/actions";
import "./styles.scss";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        height: "400px",
        transform: "translate(-50%, -50%)",
    },
};

export default function ModalBox({ isEditting, reminder }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [color, setColor] = useState("#fff");
    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEditting && reminder) {
            const { color, description, startDate, startTime, city } = reminder;
            setDescription(description);
            setStartDate(startDate);
            setStartTime(startTime);
            setColor(color);
            setCity(city);
        }
    }, [isEditting, reminder]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleSave() {
        const startDateFormatted = format(startDate, "dd/MM/yyyy");
        const startTimeFormatted = format(startTime, "HH:mm");
        const reminderId = isEditting
            ? reminder.reminderId
            : (startDateFormatted + startTimeFormatted).replace(/(\/|\:)/g, "");

        const reminderData = {
            reminderId,
            description,
            startDate,
            startDateFormatted,
            startTime,
            startTimeFormatted,
            color,
            city,
        };
        if (isEditting) {
            dispatch(editReminder(reminderData));
        } else {
            dispatch(addReminder(reminderData));
        }
        setDescription("");
        setStartDate(new Date());
        setStartTime(new Date());
        setColor("#fff");
        setCity("");
    }

    return (
        <div>
            {isEditting ? (
                <FaEdit color={"#000"} size={14} onClick={openModal} />
            ) : (
                <button onClick={openModal} className='reminder__btn'>
                    Add Reminder
                </button>
            )}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
            >
                <h3>{isEditting ? "Edit reminder" : "Add reminder"}</h3>
                <form className='reminder__form'>
                    <div className='reminder_input-group'>
                        <input
                            name='description'
                            placeholder='Description'
                            value={description}
                            data-lpignore='true'
                            className='reminder__input'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='reminder__input-group'>
                        <Colorpicker
                            name='color'
                            color={color}
                            setColor={setColor}
                        />
                    </div>
                    <div className='reminder__input-group'>
                        <DatetimePicker
                            startDate={startDate}
                            setStartDate={setStartDate}
                        />
                    </div>
                    <div className='reminder__input-group'>
                        <Timepicker
                            name='timepicker'
                            startTime={startTime}
                            setStartTime={setStartTime}
                        />
                    </div>
                    <div className='reminder__input-group'>
                        <input
                            name='city'
                            placeholder='City'
                            value={city}
                            data-lpignore='true'
                            className='reminder__input'
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    {isEditting ? (
                        <button type='button' onClick={handleSave}>
                            Save edit
                        </button>
                    ) : (
                        <button type='button' onClick={handleSave}>
                            Save
                        </button>
                    )}

                    <button type='button' onClick={closeModal}>
                        Close
                    </button>
                </form>
            </Modal>
        </div>
    );
}
