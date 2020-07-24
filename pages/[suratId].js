import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/global/Layout';
import { useRouter } from 'next/router';
import FullScreenLoading from '../components/global/FullScreenLoading';
import Basmallah from '../components/surat/Basmallah';
import Section from '../components/global/Section';
import styles from './suratId.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

export class DetailSuratBody extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            isLoadSuccess: false,
            suratId: 0,
            suratTitle: '',
            suratTotalAyat: 0,
            suratAyatArr: [],
            suratTranslationArr: []
        }
    }

    render() {
        const { isLoaded, isLoadSuccess, suratAyatArr, suratTranslationArr } = this.state;
        let AyatList = Object.entries(suratAyatArr);
        let AyatListHtml = [];
        let TranslationList = Object.entries(suratTranslationArr);

        if (isLoaded) {
            if (isLoadSuccess) {

                // The view for displaying all ayat.
                let maybeBasmallah = 1 < this.state.suratId ? <Basmallah /> : '';
                console.log(this.state.suratId)

                // Map the ayats.
                AyatList.map((ayat, i) => {
                    const cleanAyatStr = ayat[0].replace('verse_', ''),
                        cleanAyatTrans = TranslationList[i][1];

                    // Skip if it is verse_0;
                    if ('verse_0' === ayat[0]) {
                        return false;
                    }

                    return (
                        AyatListHtml.push(<DetailAyat
                            key={i}
                            ayatIndex={cleanAyatStr}
                            ayatAr={ayat[1]}
                            ayatTranslation={cleanAyatTrans}
                            ayatArabicNumber={this.convertToArabic(cleanAyatStr)}
                        />)
                    )
                })


                return (
                    <Layout title={'Surat ' + this.state.suratTitle}>
                        <Section isFull={true} extraClass={styles.detailSurat}>
                            {maybeBasmallah}
                            <div className={styles.ayatItems}>
                                {AyatListHtml}
                            </div>
                        </Section>
                    </Layout>
                )
            } else {
                return (<Layout title='Kesalahan'>
                    Halaman salah broo
                </Layout>)
            }
        } else {
            return (<FullScreenLoading />)
        }
    }

    componentDidMount() {

        // Import the surat json.
        this.importDetailSurat()
            .then((resSurat) => {

                // import the translation json.
                this.importTranslation()
                    .then((resTranslation) => {

                        // Save everything into state.
                        this.setState({
                            isLoaded: true,
                            isLoadSuccess: true,
                            suratId: this.props.suratId,
                            suratTitle: resSurat.name,
                            suratTotalAyat: resSurat.count,
                            suratAyatArr: resSurat.verse,
                            suratTranslationArr: resTranslation.verse
                        })
                    })
                    .catch((err) => {
                        this.setState({ isLoaded: true })
                    })
            })
            .catch((err) => {
                this.setState({ isLoaded: true })
            })
    }

    importDetailSurat() {
        return (
            import('../public/data/surah/surah_' + this.props.suratId + '.json')
        )
    }

    importTranslation() {
        return (
            import('../public/data/translation/id/id_translation_' + this.props.suratId + '.json')
        )
    }

    convertToArabic(number) {
        var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return number.replace(/[0-9]/g, function (w) {
            return id[+w]
        });
    }
}

DetailSuratBody.propTypes = {
    suratId: PropTypes.number.isRequired
}

const DetailAyat = (props) => {
    return (
        <div className={styles.ayatItem}>
            <div className={styles.ayatToolBox}>
                <CopyToClipboard text={props.ayatAr}
                    onCopy={() => {
                        console.log('Copied')
                    }}>
                    <button>
                        <FaCopy /> Copy
                    </button>
                </CopyToClipboard>
            </div>
            <div className={styles.ayatDetail}>
                <div className={styles.ayatTextAr}>
                    <span className={styles.innerAyatTextAr}>{props.ayatAr}</span>
                    <span className={styles.ayatTextArBreaker}>
                        <span className={styles.innerAyatTextArBreaker}>{props.ayatArabicNumber}</span>
                    </span>
                </div>
                <div className={styles.ayatTextTranslation}>
                    <p>{props.ayatTranslation}</p>
                </div>
            </div>
        </div>
    )
}

DetailAyat.propTypes = {
    ayatAr: PropTypes.string.isRequired,
    ayatIndex: PropTypes.string.isRequired,
    ayatArabicNumber: PropTypes.string.isRequired,
    ayatTranslation: PropTypes.string.isRequired
}

export default function DetailSurat() {
    let router = useRouter();
    let { suratId } = router.query;
    if (suratId) {
        return (
            <DetailSuratBody suratId={suratId} />
        )
    } else {
        return (
            <>
            </>
        )
    }
}