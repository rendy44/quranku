import Link from 'next/link';
import styles from './style.module.scss';

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className='frow-container'>
                <div className={styles.inner}>
                    <div className={styles.nav}>
                        <Link href='/'>
                            <a>QuranKu</a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}