import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function Timepicker({ startTime, setStartTime }) {
    return (
        <DatePicker
            selected={startTime}
            onChange={(date) => setStartTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption='Time'
            dateFormat='h:mm aa'
            // dateFormat='hh:mm'
        />
    );
}
