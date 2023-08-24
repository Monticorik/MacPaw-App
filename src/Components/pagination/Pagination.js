import "./pagination.scss";

const Pagination = () => {
    return(
        <nav className="pagination">
            <button className="pagination_prev"
                    disabled>
                <i className="icon_arrow_left"></i>
                <span>prev</span>
            </button>
            <button className="pagination_next"
                    disabled>
                <span>next</span>
                <i className="icon_arrow_right"></i>
            </button>
        </nav>
    );
};

export default Pagination;