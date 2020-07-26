import React from 'react'
import { FaSearch } from "react-icons/fa"
import styles from './style.module.scss'

class QuickSearch extends React.Component {
    constructor() {
        super()

        this.state = {
            querySearch: '',
        }

        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChanges(event) {
        this.setState({ querySearch: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.querySearch);
    }

    render() {
        return (
            <>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <input className={styles.input} type='text' placeholder={'Cari surat atau ayat'} onChange={this.handleChanges} value={this.state.querySearch} />
                    <button className={styles.search} type='submit' >
                        <FaSearch color={'#ffffff'} />
                    </button>
                </form>
            </>
        )
    }

    componentDidMount() {

    }
}

export default QuickSearch;