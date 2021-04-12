import React from 'react';

import styles from './CalendarHeader.module.css';

export default function CalendarHeader({value, setValue}) {
    function currMonthName() {
        return value.format('MMMM')
    }

    function currYear() {
        return value.format('YYYY')
    }

    function prevMonth() {
        return value.clone().subtract(1, 'month')
    }

    function nextMonth() {
        return value.clone().add(1, 'month')
    }

    return (
        <div className={styles.calendar_header}>
                <div className={styles.previous} onClick={() => setValue(prevMonth())}>{ String.fromCharCode(60) }</div>
                <div className={styles.current}>
                    {currMonthName()} {currYear()}
                </div>
                <div className={styles.next} onClick={() => setValue(nextMonth())}>{String.fromCharCode(62)}</div>
            </div>
    )
}


