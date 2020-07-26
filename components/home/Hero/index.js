import styles from './style.module.scss';

export default function Hero(props) {
    return (
        <div className={styles.hero}>
            <div className='frow-container'>
                <div className='frow'>
                    <div className='col-sm-6-7 col-md-3-4'>
                        <h1 className={styles.title}>القرآن الكريم</h1>
                        <p className={styles.lead}>Kitab Suci Alquran</p>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}