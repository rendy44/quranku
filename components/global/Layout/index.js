import Head from 'next/head';
import Header from '../Header';
import PropTypes from 'prop-types';
import Footer from "../Footer";
import Section from '../Section';
import styles from './style.module.scss';

export default function Layout(props) {
    const metaTitle = 'QuranKu',
        usedMetaTitle = props.title ? props.title + ' | ' + metaTitle : metaTitle
    const usedChildren = props.isGenericPage ?
        <Section noHero={true} isFull={true}>
            <h1 className={styles.pageTitle}>{props.title}</h1>
            {props.children}
        </Section> :
        props.children;
    return (
        <>
            <Head>
                <title>{usedMetaTitle}</title>
            </Head>
            <Header />
            {usedChildren}
            <Footer metaTitle={metaTitle} />
        </>
    )
}

Layout.propTypes = {
    title: PropTypes.string,
    isGenericPage: PropTypes.bool
}