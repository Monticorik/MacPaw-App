import PropTypes from 'prop-types';

import "./pagination.scss";

const Pagination = (props) => {
    const {prev, next} = props.paginationDisabled;
    const {onPaginationNext, onPaginationPrev} = props;
    return(
        <nav className="pagination">
            <button className="pagination_prev"
                    disabled={prev}
                    onClick={onPaginationPrev}>
                <i className="icon_arrow_left"></i>
                <span>prev</span>
            </button>
            <button className="pagination_next"
                    disabled={next}
                    onClick={onPaginationNext}>
                <span>next</span>
                <i className="icon_arrow_right"></i>
            </button>
        </nav>
    );
};

Pagination.propTypes = {
    paginationDisabled: PropTypes.object,
    onPaginationNext: PropTypes.func,
    onPaginationPrev: PropTypes.func,
};

export default Pagination;