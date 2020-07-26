import Link from 'next/link';
import styles from './style.module.scss';

export default function QuickLinks() {
    return (
        <div className={styles.wrapper}>
            <ul>
                <li>Link cepat:</li>
                <li>
                    <Link href={'[suratId]'} as={'/17'}>
                        <a>Surat Ibrahim</a>
                    </Link>
                </li>
                <li>
                    <Link href={'[suratId]'} as={'/36'}>
                        <a>Surat Yasin</a>
                    </Link>
                </li>
                <li>
                    <Link href={'[suratId]'} as={'/55'}>
                        <a>Surat Ar-Rahman</a>
                    </Link>
                </li>
                <li>
                    <Link href={'[suratId]'} as={'/78'}>
                        <a>Surat An-Naba</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}