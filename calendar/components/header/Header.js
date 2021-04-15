//core
import Link from 'next/link';
//styles
import styles from '../../styles/calendarHeader.module.scss';

export function Header (  ){
    return (
        <>
            <nav className={styles.navigation}>
                <div className={styles.navigation_logo}>
                    <div className={styles.logo_img}></div>
                </div>
                <ul className={styles.navigation_pages}>
                    <li><Link href={'/about'}><a className={styles.link}>about us</a></Link></li>
                    <li><Link href={'/'}><a className={styles.link}>home</a></Link></li>  
                </ul>
                          
            </nav>
        </>
    )
}