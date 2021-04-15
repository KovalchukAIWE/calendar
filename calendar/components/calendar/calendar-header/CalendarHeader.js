//styles
import styles from  "../../../styles/calendarHeader.module.scss";


export default function CalendarHeader({value, onChange}) {
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
          <div
            className={styles.calendar_arrows}
            onClick={() => onChange(prevMonth())}
          >
            {String.fromCharCode(171)}
          </div>
          <div>
            {currMonthName()} {currYear()}
          </div>
          <div className={styles.calendar_arrows} onClick={() => onChange(nextMonth())}>
            {String.fromCharCode(187)}
          </div>
        </div>
      );
}


