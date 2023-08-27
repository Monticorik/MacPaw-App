import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import styles from './appWrapper.module.scss';


const AppWrapper = (props) => {
    const router = useRouter();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        router.push(`/search/${event.target[0].value}`);
    };

    const onMenuClick = () => {
        document.querySelector('.left_side').style.display = 'block';
        document.querySelector('.right_side').style.display = 'none';
    };

    return (
        <div className={"right_side"}>
            <main>
                <section className={styles.search_block}>
                    <button className={styles.menu}
                            onClick={onMenuClick}>
                        <i className='icon_menu'></i>
                    </button>
                    <div className={styles.search_input}>
                        <form onSubmit={onSubmitHandler}>
                            <input type="text" placeholder="Search for breeds by name"/>
                            <button className={styles.search_button}
                                        type="submit">
                                    <i className='icon_search'></i>
                            </button>
                        </form>
                    </div>
                    <Link href="/likes"
                        className={`${styles.likes} ${router.pathname === '/likes' ? styles.active : ''}`}
                        tabIndex={router.pathname === '/likes' ? -1 : 0}> 
                            <i className='icon_like'></i>
                    </Link>
                    <Link href="/favourites" 
                        className={`${styles.favourites} ${router.pathname === '/favourites' ? styles.active : ''}`}
                        tabIndex={router.pathname === '/favourites' ? -1 : 0}>
                            <i className='icon_favourite'></i>
                    </Link>
                    <Link href="/dislikes"
                        className={`${styles.dislikes} ${router.pathname === '/dislikes' ? styles.active : ''}`}
                        tabIndex={router.pathname === '/dislikes' ? -1 : 0}>
                            <i className='icon_dislike'></i>
                    </Link>
                </section>
                <section className={styles.main_block}>
                    {props.children}
                </section>
            </main>
        </div>
    );
};

AppWrapper.propTypes = {
    children: PropTypes.node,
};

export default AppWrapper;