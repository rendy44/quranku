import React from 'react'
import { IoMdSearch } from "react-icons/io"
import styles from './style.module.scss';
import PropTypes from 'prop-types';

class QuickSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            querySearch: '',
            source: this.props.source
        }

        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChanges(event) {
        this.setState({ querySearch: event.target.value });
    }

    handleSubmit(event) {
        const { source, querySearch } = this.state;
        event.preventDefault();

        alert('Terima kasih sudah mencoba QuranKU, untuk saat ini fitur ini belum tersedia :)')

        let findSurat = source.some((obj) => { obj.title == querySearch });
        console.log(findSurat);
        // alert(findSurat);
    }

    render() {
        return (
            <>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <input className={styles.input} type='text' placeholder={'Cari surat atau ayat'} onChange={this.handleChanges} value={this.state.querySearch} />
                    <button className={styles.search} type='submit' >
                        <IoMdSearch color='#ffffff' />
                    </button>
                </form>
            </>
        )
    }

    componentDidMount() {

    }
}

QuickSearch.propTypes = {
    source: PropTypes.array.isRequired
}
export default QuickSearch;