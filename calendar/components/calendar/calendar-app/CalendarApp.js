//core
import React, {useState, useEffect} from 'react';
import moment from 'moment';
//components
import buildCalendar from '../../../helpers/build';
import CalendarHeader from '../calendar-header/CalendarHeader';
//styles
import styles from '../../../styles/calendarApp.module.scss';


export default function CalendarApp ({ value, onChange }) {
    const [calendar, setCalendar] = useState([])

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])
 
    return (
        <div className={styles.calendar_bg}>
            <div className={styles.calendar}>
            <CalendarHeader value={value} onChange={onChange}/>
            <hr className={styles.calendar_line}/>
            {calendar.map((week, wi) => (
          <div key={wi}>
            {week.map((day, di) => (
              <div
                key={di}
                className={styles.day}
                // onClick={() => {
                //   
                // }}
              >
                <div className={styles.each_day}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
            <hr className={styles.calendar_line}/>
            <div>
                {
                    ['s', 'm', 't', 'w', 't', 'f', 's'].map((d) => (
                        <div  className={styles.week}>{d}</div>))
                    }
            </div>
            <hr className={styles.calendar_line}/>
            </div>
        </div>
        
    )
}

 