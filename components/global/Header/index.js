import Link from 'next/link';
import styles from './style.module.scss';
import { IoMdMailUnread, IoMdPerson } from 'react-icons/io';

export default function Header(props) {
    const urlNav = [
        {
            url: '/tentang',
            label: 'Tentang',
            icon: <IoMdPerson />
        },
        {
            url: '/hubungi',
            label: 'Hubungi',
            icon: <IoMdMailUnread />
        }
    ],
        urlNavHtml = [];

    urlNav.map((nav, index) => {
        return (
            urlNavHtml.push(
                <li key={index}>
                    <Link href={nav.url}>
                        <a>
                            <i>{nav.icon}</i>
                            <span>{nav.label}</span>
                        </a>
                    </Link>
                </li>
            )
        )
    })

    return (
        <header className={styles.header}>
            <div className='frow-container'>
                <div className={styles.inner}>
                    <div className={styles.nav}>
                        <Link href='/'>
                            <a>QuranKu</a>
                        </Link>
                    </div>
                    <div className={styles.navLink}>
                        <ul>
                            {urlNavHtml}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}