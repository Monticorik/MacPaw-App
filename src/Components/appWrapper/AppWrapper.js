import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './appWrapper.scss';


const AppWrapper = (props) => {
    const {withoutTabIndex} = props;
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);

        navigate(`/search/${event.target[0].value}`);
    };

    return (
        <>
            <section className='search_block'>
                <button className="menu">
                    <i className="icon-menu"></i>
                </button>
                <div className="search_input">
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" placeholder="Search for breeds by name"/>
                        <button className="search_button"
                                    type="submit">
                                <i className="icon_search"></i>
                        </button>
                    </form>
                </div>
                <NavLink to="/likes" 
                         className="likes"
                         tabIndex={withoutTabIndex === 'likes' ? -1 : null}>
                    <i className="icon_like"></i>
                </NavLink>
                <NavLink to="/favourites" 
                         className="favourites"
                         tabIndex={withoutTabIndex === 'favourites' ? -1 : null}>
                    <i className="icon_favourite"></i>
                </NavLink>
                <NavLink to="/dislikes" 
                         className="dislikes"
                         tabIndex={withoutTabIndex === 'dislikes' ? -1 : null}>
                    <i className="icon_dislike"></i>
                </NavLink>
            </section>
            <section className='main_block'>
                {props.children}
            </section>
        </>
    );
};

AppWrapper.propTypes = {
    withoutTabIndex: PropTypes.bool,
    children: PropTypes.node,
};

export default AppWrapper;