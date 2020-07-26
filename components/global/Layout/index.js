import Head from 'next/head';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import Footer from "../Footer";

export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    title: PropTypes.string.isRequired
}