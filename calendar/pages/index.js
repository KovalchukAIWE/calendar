
import Head from 'next/head';
import { Header } from '../components/header/Header';
import  CalendarApp  from '../components/calendar/calendar-app/CalendarApp'
import styles from './index.module.css'

export default function Calendar () {
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
              <CalendarApp></CalendarApp>
            </div>
          </div>
      </div>
    )
}