import styles from './style.module.scss';
import PropTypes from 'prop-types';

export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className='frow-container'>
                <div className='text-center'>
                    &copy; 2020 {props.metaTitle} | Dibuat dan didesain oleh <a href='https://fb.com/rendy.444444' target='_blank' rel='noopener noreferrer'>Rendy</a>
                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    metaTitle: PropTypes.string.isRequired
}