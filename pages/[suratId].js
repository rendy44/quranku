import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/global/Layout';
import { useRouter } from 'next/router';
import FullScreenLoading from '../components/global/FullScreenLoading';
import Basmallah from '../components/surat/Basmallah';
import Section from '../components/global/Section';
import styles from './suratId.module.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaHashtag, FaPlay } from 'react-icons/fa';

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
        const {
            isLoaded,
            isLoadSuccess,
            suratAyatArr,
            suratTranslationArr,
        } = this.state;
        let AyatList = Object.entries(suratAyatArr);
        let AyatListHtml = [];
        let TranslationList = Object.entries(suratTranslationArr);

        if (isLoaded) {
            if (isLoadSuccess) {

                // The view for displaying all ayat.
                let maybeBasmallah = 1 < this.state.suratId ? <Basmallah /> : '';

                // Map the ayats.
                AyatList.map((ayat, i) => {
                    const cleanAyatIndex = ayat[0].replace('verse_', ''),
                        cleanAyatTrans = TranslationList[i][1],
                        cleanAyatAr = ayat[1];

                    // Skip if it is verse_0; 
                    if ('verse_0' === ayat[0]) {
                        return false;
                    }

                    return (
                        AyatListHtml.push(
                            <div className={styles.ayatItem} key={i}>
                                <div className={styles.ayatToolBox}>
                                    <div className={styles.ayatToolboxDetail}>
                                        <FaHashtag />{this.state.suratId}:{cleanAyatIndex}
                                    </div>
                                    <CopyToClipboard text={cleanAyatAr}
                                        onCopy={() => {
                                            console.log('Copied')
                                        }}>
                                        <button className={styles.ayatToolboxDetail}>
                                            <FaCopy /> Salin
                                    </button>
                                    </CopyToClipboard>
                                </div>
                                <div className={styles.ayatDetail}>
                                    <div className={styles.ayatTextAr}>
                                        <span className={styles.innerAyatTextAr}>{cleanAyatAr}</span>
                                        <span className={styles.ayatTextArBreaker}>
                                            <span className={styles.innerAyatTextArBreaker}>{this.convertToArabic(cleanAyatIndex)}</span>
                                        </span>
                                    </div>
                                    <div className={styles.ayatTextTranslation}>
                                        <p>{cleanAyatTrans}</p>
                                    </div>
                                </div>
                            </div>
                        )
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
                return (<Layout title='Kesalahan' isGenericPage={true}>
                    <article>
                        <p>Surat yang Anda cari tidak ditemukan</p>
                    </article>
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

export default function DetailSurat() {
    let router = useRouter();
    let { suratId } = router.query;
    if (suratId) {
        return (
            <DetailSuratBody suratId={parseInt(suratId)} />
        )
    } else {
        return (
            <>
            </>
        )
    }
}