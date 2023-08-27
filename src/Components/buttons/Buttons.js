import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import styles from "./buttons.module.scss";

const BackButton = () => {
    const router = useRouter();

    const onGoBack = () => {
        router.back();
    };

    return(
        <button className={styles.back_button}
                onClick={onGoBack}>
            <i className='icon_arrow_left'></i>
        </button>
    );
};

const CloseButton = ({close, className}) => {
    return(
        <button className={`${styles.close_button} ${className}`}
            onClick={close}>
            <i className='icon_close'></i>
        </button>
    );
};

CloseButton.propTypes = {
    close: PropTypes.func,
    className: PropTypes.string
};

const UpdateButton = (props) => {
    const {className, updateFunction} = props;
    return(
        <button className={`${styles.update_button} ${className}`}
            onClick={updateFunction}>
            <i className='icon_update'></i>
        </button>
    );
};

UpdateButton.propTypes = {
    updateFunction: PropTypes.func
};

export {BackButton, CloseButton, UpdateButton};