import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import './label.scss';

const Label = (props) => {
    let defaultLabel = useLocation().pathname;
    defaultLabel = defaultLabel.slice(1);
    const {label, color = "red",} = props;

    return(
        <div className="label"
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