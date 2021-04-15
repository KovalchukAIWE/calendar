//core
import React, { useState } from "react";
import moment from "moment";
import Head from 'next/head';
//components
import { Header } from '../components/header/Header';
import  CalendarApp  from '../components/calendar/calendar-app/CalendarApp';
//styles
import styles from '../styles/index.module.scss';

export default function Calendar () {
  const [selectedDate, setSelectedDate] = useState(moment());
    return ( 
      <div className={styles.wrapper}>
        <Head>
            <meta name="keywords" content="calendar, next, java script" />
            <title>Calendar</title>
        </Head>
        <Header/>
          <div>
            <div className={styles.cover_img}>
              <div className={styles.text_wrapper}>
                <p className={styles.text_yellow}>Choose the day for the meeting</p>
                <p className={styles.text_white}>We encourage you to book your appointment online. This will save you time</p>
              </div>
              <CalendarApp value={selectedDate} onChange={setSelectedDate}/>
            </div>
          </div>
      </div>
      
    )
}