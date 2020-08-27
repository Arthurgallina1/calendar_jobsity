import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { format } from "date-fns";
import DatetimePicker from "../DatetimePicker";
import Timepicker from "../Timepicker";
import Colorpicker from "../Colorpicker";
import { addReminder } from "../../store/modules/Reminders/actions";
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

export default function ModalBox() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [color, setColor] = useState("#fff");
    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleSave() {
        const startDateFormatted = format(startDate, "dd/MM/yyyy");
        const reminderData = {
            description,
            startDateFormatted,
            startTime,
            color,
            city,
        };
        dispatch(addReminder(reminderData));
        console.log(reminderData);
    }

    return (
        <div>
            <button onClick={openModal} className='reminder__btn'>
                Add Reminder
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
            >
                <h3>Add reminder</h3>
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

                    <button type='button' onClick={handleSave}>
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
