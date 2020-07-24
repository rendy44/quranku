import React from 'react';
import FullScreenLoading from '../components/global/FullScreenLoading';
import Layout from '../components/global/Layout';
import Hero from '../components/home/Hero';
import QuickSearch from '../components/home/QuickSearch';
import DataListSurat from '../public/data/surah.json';
import Section from '../components/global/Section';
import { ListSurat, ListSuratItem } from '../components/home/ListSurat';

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      listSuratHtml: [],
      isLoaded: false
    }
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <Layout title='QURANKU'>
          <Hero>
            <QuickSearch />
          </Hero>
          <Section title={'Daftar Surat'}>
            <ListSurat>
              {this.state.listSuratHtml}
            </ListSurat>
          </Section>
        </Layout>
      )
    } else {
      return (
        <FullScreenLoading />
      )
    }
  }

  componentDidMount() {
    let listSuratHtml = [];
    let ParseSurat = DataListSurat.map((surat, i) => {
      return (
        listSuratHtml.push(<ListSuratItem
          key={i}
          index={parseInt(surat.index)}
          title={surat.title}
          titleAr={surat.titleAr}
          numberOfAyat={surat.count}
          type={surat.type}
        />)
      )
    })

    Promise.all(ParseSurat)
      .then((res) => {
        this.setState({
          listSuratHtml: listSuratHtml,
          isLoaded: true
        })
      })
  }
}

export default Home