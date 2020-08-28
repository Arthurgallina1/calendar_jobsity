import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./styles.scss";

const monthsById = [
    { month: "January", id: 0 },
    { month: "February", id: 1 },
    { month: "March", id: 2 },
    { month: "April", id: 3 },
    { month: "May", id: 4 },
    { month: "June", id: 5 },
    { month: "July", id: 6 },
    { month: "August", id: 7 },
    { month: "September", id: 8 },
    { month: "October", id: 9 },
    { month: "November", id: 10 },
    { month: "December", id: 11 },
];
export default function MonthSelector({ selectedMonth, setSelectedMonth }) {
    return (
        <div className='monthselector'>
            <div className='monthselector_leftside'>
                <FaChevronLeft
                    color={"#5763DE"}
                    size={16}
                    onClick={() => setSelectedMonth(selectedMonth - 1)}
                />
                {monthsById.map((month) => {
                    return (
                        month.id === selectedMonth && (
                            <span
                                className='monthselector__title'
                                key={month.id}
                            >
                                {month.month}
                            </span>
                        )
                    );
                })}
                <FaChevronRight
                    color={"#5763DE"}
                    size={16}
                    onClick={() => setSelectedMonth(selectedMonth + 1)}
                />
            </div>
            <span className='monthselector__year gray'>2020</span>
        </div>
    );
}
