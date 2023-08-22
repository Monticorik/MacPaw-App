import './appWrapper.scss';

const AppWrapper = (props) => {
    return (
        <>
            <section className='search_block'>
                <button className="menu">
                    <i className="icon-menu"></i>
                </button>
                <div className="search_input">
                    <form>
                        <input type="text" placeholder="Search for breeds by name"/>
                        <button className="search_button"
                                    type="submit">
                                <i className="icon_search"></i>
                        </button>
                    </form>
                </div>
                <a  className="likes"
                    href="#">
                    <i className="icon_like"></i>
                </a>
                <a  className="favourites"
                    href="#">
                    <i className="icon_favourite"></i>
                </a>
                <a  className="dislikes"
                    href="#">
                    <i className="icon_dislike"></i>
                </a>
            </section>
            <section className='main_block'>
                {props.children}
            </section>
        </>
    )
}

export default AppWrapper