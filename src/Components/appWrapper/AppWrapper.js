import './appWrapper.scss';
import { NavLink } from 'react-router-dom';

import "../../style/mixin.scss";

const AppWrapper = (props) => {
    const {withoutTabIndex} = props;
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
                <NavLink to="/likes" 
                         className="like"
                         tabIndex={withoutTabIndex === "likes" ? -1 : 0}
                         >
                    <i className="icon_like"></i>
                </NavLink>
                <NavLink to="/favourites" 
                         className="favourite"
                         tabIndex={withoutTabIndex === "favourites" ? -1 : 0}>
                    <i className="icon_favourite"></i>
                </NavLink>
                <NavLink to="/dislikes" 
                         className="dislike"
                         tabIndex={withoutTabIndex === "dislikes" ? -1 : 0}>
                    <i className="icon_dislike"></i>
                </NavLink>
            </section>
            <section className='main_block'>
                {props.children}
            </section>
        </>
    )
}

export default AppWrapper