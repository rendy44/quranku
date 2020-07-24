import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className='frow-container'>
                <div className='text-center'>
                    &copy; 2020 QURANKU | Dibuat dan didesain oleh <a href='https://fb.com/rendy.444444' target='_blank' rel='noopener noreferrer'>Rendy</a>
                </div>
            </div>
        </footer>
    )
}