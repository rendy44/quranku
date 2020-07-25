import Sound from 'react-sound';
import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';
import styles from './SuratHeader.module.scss';

export default function SuratHeader(props) {
    const { suratId } = props;
    return (<Sound url='../data/audio/001/004.mp3' playStatus={Sound.status.STOPPED} />)
}

SuratHeader.propTypes = {
    suratId: PropTypes.string.isRequired
}