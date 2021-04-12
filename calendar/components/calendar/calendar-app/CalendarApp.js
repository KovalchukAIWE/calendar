import React, {useState, useEffect} from 'react';
import styles from './CalendarApp.module.css';
import moment from 'moment';
import buildCalendar from '../../../helpers/build';
import CalendarHeader from '../calendar-header/CalendarHeader'

export default function CalendarApp () {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    function isSelected(day) {
        return value.isSame(day, 'day')
    }

    function beforeToday(day) {
        return value.isBefore(new Date(), 'day')
    }

    function isToday(day) {
        return value.isSame(new Date(), 'day')
    }

    function dayStyles(day) {
        if (beforeToday(day)) return 'before'
        if (isSelected(day)) return 'selected'
        if (isToday(day)) return 'today'
        return ''
    }

    return (
        <div className={styles.calendar_bg}>
            <div className={styles.calendar_wrapper}>
            <CalendarHeader value={value} setValue={setValue}/>

            {calendar.map((week) => (
                <div>
                    {week.map((day) => (
                        <div className={styles.calendar_day} onClick={() => setValue(day)}>
                            <div 
                            className={dayStyles(day)}>
                            {day.format('D').toString()}</div>
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    )
}

 