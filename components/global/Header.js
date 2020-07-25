import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import SuratHeader from '../surat/SuratHeader';

export default function Header(props) {
    let router = useRouter();
    let { suratId } = router.query;
    // Check maybe we use different header for surat detail.
    const maybeSuratHeader = suratId ? <SuratHeader suratId={suratId} /> : ''

    return (
        <header className={styles.header}>
            <div className='frow-container'>
                <div className={styles.inner}>
                    <div className={styles.nav}>
                        <Link href='/'>
                            <a>QuranKu</a>
                        </Link>
                        {maybeSuratHeader}
                    </div>
                </div>
            </div>
        </header>
    )
}