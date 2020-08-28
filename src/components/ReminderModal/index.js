import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        borderRadius: "8px",
        marginRight: "-50%",
        height: "400px",
        transform: "translate(-50%, -50%)",
    },
};

export default function ModalBox({ isEditting, reminder }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [color, setColor] = useState("#D33115");
    const [city, setCity] = useState("");
    const reminders = useSelector((state) => state.reminders);
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
        const isDateOccuppied = reminders.filter(
            (reminder) =>
                reminder.startDateFormatted === startDateFormatted &&
                reminder.startTimeFormatted === startTimeFormatted
        );

        if (isDateOccuppied.length > 0) {
            setErrorMsg("This date and time is already occupied.");
            return;
        }

        if (description === "") {
            setErrorMsg("Description can't be empty.");
            return;
        }
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
        setColor("#D33115");
        setCity("");
    }

    return (
        <div>
            {isEditting ? (
                <FaEdit color={"#4B55BF"} size={14} onClick={openModal} />
            ) : (
                <button onClick={openModal} className='reminder__btn'>
                    <strong> Add Reminder</strong>
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
                            onChange={(e) => {
                                if (description.length <= 30) {
                                    setDescription(e.target.value);
                                    setErrorMsg("");
                                } else {
                                    setDescription(e.target.value);
                                    setErrorMsg("30 characters limit reached.");
                                }
                            }}
                        />
                        {errorMsg && <span>{errorMsg}</span>}
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
                            setErrorMsg={setErrorMsg}
                        />
                    </div>
                    <div className='reminder__input-group'>
                        <Timepicker
                            name='timepicker'
                            startTime={startTime}
                            setStartTime={setStartTime}
                            setErrorMsg={setErrorMsg}
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
                    <button
                        type='button'
                        onClick={handleSave}
                        disabled={description.length > 30}
                    >
                        Save
                    </button>

                    <button type='button' onClick={closeModal}>
                        Close
                    </button>
                </form>
            </Modal>
        </div>
    );
}
