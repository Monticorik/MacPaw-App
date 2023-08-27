import PropTypes from 'prop-types';

import styles from "./pagination.module.scss";

const Pagination = (props) => {
    const {prevDisabled, nextDisabled, onPaginationNext, onPaginationPrev} = props;

    return(
        <nav className={styles.pagination}>
            <button className={styles.pagination_prev}
                    disabled={prevDisabled}
                    onClick={onPaginationPrev}>
                <i className='icon_arrow_left'></i>
                <span>prev</span>
            </button>
            <button className={styles.pagination_next}
                    disabled={nextDisabled}
                    onClick={onPaginationNext}>
                <span>next</span>
                <i className='icon_arrow_right'></i>
            </button>
        </nav>
    );
};

Pagination.propTypes = {
    prevDisabled: PropTypes.bool,
    nextDisabled: PropTypes.bool,
    onPaginationNext: PropTypes.func,
    onPaginationPrev: PropTypes.func,
};

export default Pagination;