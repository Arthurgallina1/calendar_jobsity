import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Datepicker({ startDate, setStartDate }) {
    return (
        <DatePicker
            selected={startDate}
            data-lpignore='true'
            dateFormat='yyyy/MM/dd'
            className='reminder__input'
            onChange={(date) => setStartDate(date)}
        />
    );
}
