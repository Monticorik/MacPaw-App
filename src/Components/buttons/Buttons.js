import { useNavigate } from "react-router-dom";

import "./buttons.scss";

const BackButton = () => {
    const navigate = useNavigate();

    const onGoBack = () => {
        navigate(-1);
    };

    return(
        <button className="back_button"
                onClick={onGoBack}>
            <i className="icon_arrow_left"></i>
        </button>
    );
};

const MenuButton = () => {
    return(
        <button className="call_menu_button">
            <i className="icon_menu"></i>
        </button>
    );
};

const CloseButton = () => {
    return(
        <button className="close_button">
            <i className="icon_close"></i>
        </button>
    );
};

const UpdateButton = () => {
    return(
        <button className="update_button">
            <i className="icon_update"></i>
        </button>
    );
};

export {BackButton, MenuButton, CloseButton, UpdateButton};



