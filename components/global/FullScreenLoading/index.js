import ReactLoading from 'react-loading';
import styles from './style.module.scss';

export default function FullScreenLoading() {
    return (
        <div className={styles.wrapper}>
            <ReactLoading height={100} width={100} color={'#335577'} type={'cylon'} />
        </div>
    )
}