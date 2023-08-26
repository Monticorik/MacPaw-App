import logo from '../../resources/img/Logo.svg';
import AppNav from '../appNav/AppNav';
import { Link, useLocation } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
    const location = useLocation();
    const isFirstPage = location.pathname === '/';

    return (
        <div className={`left_side ${isFirstPage ? 'first_page' : ''}`}>
        <header>
            <div id="logo">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <div id="greating_text">
                    <h1>Hi intern!</h1>
                    <h2>Welcome to MI 2022 Front-end test</h2>
            </div>
            <AppNav/>
        </header>
        </div>
    );
};

export default AppHeader;