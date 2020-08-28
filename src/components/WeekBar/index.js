import React from "react";
import "./styles.scss";
export default function WeekBar() {
    return (
        <div className='weekbar'>
            <div className='weekbar__item'>Sunday</div>
            <div className='weekbar__item'>Monday</div>
            <div className='weekbar__item'>Tuesday</div>
            <div className='weekbar__item'>Wednesday</div>
            <div className='weekbar__item'>Thursday</div>
            <div className='weekbar__item'>Friday</div>
            <div className='weekbar__item'>Saturday</div>
        </div>
    );
}
