import Image from 'next/image';

import styles from '@/style/index.module.scss';

const Banner = () => {
    return (
        <div className={`right_side ${styles.right_side} ${styles.first_page}`} >
            <main>
                <div className={styles.banner}>
                    <Image src='/girl-and-pet 1.svg' width={100} height={100} priority alt="banner girl and pet"/>
                </div>
            </main>
        </div>
    );
};

export default Banner;