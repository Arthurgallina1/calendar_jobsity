import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaCircle, FaTrash } from "react-icons/fa";
import { getWeatherData } from "../../services/api";
import Modal from "../ReminderModal";
import { deleteReminder } from "../../store/modules/Reminders/actions";
import "./styles.scss";

export default function Reminder({ reminder }) {
    const [weather, setWeather] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const getWeather = async () => {
            const response = await getWeatherData(reminder.city);
            setWeather(response);
        };
        getWeather();
    }, [reminder.city]);

    const handleDelete = () => {
        dispatch(deleteReminder(reminder.reminderId));
    };
    return (
        <div className='fullreminder'>
            <div className='fullreminder__ball'>
                <FaCircle size={15} color={reminder.color} />
            </div>
            <div className='fullreminder_title'>
                <strong>
                    <span>{reminder.description}</span>
                </strong>
                <small>{reminder.startTimeFormatted}</small>
            </div>
            <div className='fullreminder_weather'>
                <strong>
                    <span>{reminder.city}</span>
                </strong>
                <small>
                    {weather.main}, {weather.temp}&#176;C
                </small>
                {/* <small>{reminder.startTimeFormatted}</small> */}
            </div>
            <div className='fullreminder_edit'>
                <Modal isEditting reminder={reminder} />
                <FaTrash size={14} color={"#F14764"} onClick={handleDelete} />
            </div>
        </div>
    );
}
