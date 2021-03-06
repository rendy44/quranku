import PropTypes from 'prop-types';
import styles from './style.module.scss';

export default function Section(props) {
    const colSizeCss = props.isFull ? 'col-sm-1-1' : 'col-sm-6-7 col-md-4-5 col-lg-3-4';
    const maybeTitle = props.title ? <div className={styles.sectionTitle}><h2>{props.title}</h2></div> : '';
    let sectionClass = props.extraClass ? styles.section + ' ' + props.extraClass : styles.section;

    if (props.noHero) {
        sectionClass += ' ' + styles.noHero;
    }

    return (
        <>
            <section className={sectionClass}>
                <div className='frow-container'>
                    <div className='frow'>
                        <div className={colSizeCss}>
                            {maybeTitle}
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    isFull: PropTypes.bool,
    noHero: PropTypes.bool,
    extraClass: PropTypes.string
}