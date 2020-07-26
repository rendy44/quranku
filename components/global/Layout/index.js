import Head from 'next/head';
import Header from '../Header';
import PropTypes from 'prop-types';
import Footer from "../Footer";

export default function Layout(props) {
    const metaTitle = 'QuranKu',
        usedMetaTitle = props.title ? props.title + ' | ' + metaTitle : metaTitle
    return (
        <>
            <Head>
                <title>{usedMetaTitle}</title>
            </Head>
            <Header />
            {props.children}
            <Footer metaTitle={metaTitle} />
        </>
    )
}

Layout.propTypes = {
    title: PropTypes.string
}