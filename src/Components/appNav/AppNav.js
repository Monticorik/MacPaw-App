import Link from 'next/link';
import Image from 'next/image';

import { CloseButton } from '@/components/buttons/Buttons';

import styles from './appNav.module.scss';

const AppNav = () => {

    const menuArguments = [{src: '/vote-table.svg', text: 'voting', color: 'purple'},
                           {src: '/pet-breeds.svg', text: 'breed', color: 'green'},
                           {src: '/images-search.svg', text: 'galery', color: 'orange'}];

    const closeMenu = () => {
        document.querySelector('.left_side').style.display = '';
        document.querySelector('.right_side').style.display = '';
    };

    const getMenuList = () => {
        const menuList = menuArguments.map((item, index) => {
                return(
                    <li className={styles.menu_option}
                        roll={item.text + '_option'}
                        key={index}>
                        <Link href={`/${item.text}`}>
                            <div className={styles.menu_img}
                                style={{backgroundColor: `var(--${item.color})`}}>
                                <Image 
                                    arya-hidden="true" 
                                    src={item.src} 
                                    width={100}
                                    height={100}
                                    priority
                                    alt={item.text}/>
                            </div>
                            <div className={styles.menu_text}>
                                <span>{item.text}</span>
                            </div>
                        </Link>
                    </li>
                );
            });
        return (
            <ul className={styles.menu}>
                {menuList}
            </ul>
        );
    };

    return (
        <nav id={styles.main_menu}>
                <CloseButton
                    close={closeMenu}
                    className={styles.close_button}/> 
                <span className={styles.start_text}>Lets start using The Cat API</span>
                {getMenuList()}
        </nav>
    );
};


export default AppNav;