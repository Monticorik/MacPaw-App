import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import styles from './label.module.scss';

const Label = (props) => {
    const defaultLabel = useRouter().asPath.slice(1);
    const {label, color = "red",} = props;

    return(
        <div className={`${styles.label} ${props.className || ''}`}
             data-color={color}>
            <span>{label || defaultLabel}</span>
        </div>
    );
};

Label.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string
};

export default Label;