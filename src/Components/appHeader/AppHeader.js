import logo from '../../resources/img/Logo.svg';
import AppNav from '../appNav/AppNav';

import './appHeader.scss';

const AppHeader = () => {
    return (
        <header>
            <div id="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div id="greating_text">
                <h1>Hi!👋</h1>
                <h2>Welcome to MacPaw Bootcamp 2023</h2>
            </div>
            <AppNav/>
        </header>
    );
};

export default AppHeader;