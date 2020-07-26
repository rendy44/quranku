import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

export function ListSurat(props) {
    return (
        <div className={styles.suratItems}>
            {props.children}
        </div>
    )
}

export function ListSuratItem(props) {
    return (
        <div className={styles.suratItem}>
            <Link href={'[suratId]'} as={'/' + props.index}>
                <a className={styles.innerItem}>
                    <div className={styles.detailItem}>
                        <div className={styles.leftDetailItem}>
                            <span className='number'>{props.index}</span>
                        </div>
                        <div className={styles.rightDetailItem}>
                            <div className={styles.upperRightDetailItem}>
                                <span className='name'>{props.title}</span>
                            </div>
                            <div className={styles.bottomRightDetailItem}>
                                <span>{props.type}</span>
                                <span>{props.numberOfAyat} ayat</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.graphItem}>
                        <span>{props.titleAr}</span>
                    </div>
                </a>
            </Link>
        </div>
    )
}
ListSuratItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    titleAr: PropTypes.string.isRequired,
    numberOfAyat: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
}