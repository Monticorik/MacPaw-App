import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from "./gridImageSection.module.scss";

const GridImageSection = (props) => {
    const {viewImages, onFigcaptionClick} = props;
    const pageName = useRouter().asPath.slice(1);

    const setImagesBlock = () => {
        const images = [];

        //this cicle divide image array on chunk with 5 objects
        //each chunk is handled by function that return a component
        for(let i = 0; i < viewImages.length; i += 5) {
            const arr = viewImages.slice(i, i + 5);
            images.push(imageListHandler(arr, i));
        }

        return(
            <>
                {images}
            </>
        );
    };

    const imageListHandler = (imageList, index) => {
        const images = imageList.map(image => {
                                return(
                                    <div className={styles.grid_img}
                                        key={image.id}>
                                        {pageName === 'breed' || /search/.test(pageName) ? <ViewBreedImage breed={image}/> :
                                         pageName === 'galery' ? <ViewGaleryImage image={image}/> :
                                         <ViewVotingImage image={image}/>}
                                    </div>
                                );
                        });

        return(
            <div className={styles.images_block}
                 key={index}>
                {images}
            </div>
        );
    };

    const ViewBreedImage = ({breed}) => {
        const {id: breedID, name, src, width, height} = breed;
        return (
            <Link href={`/breed/${breedID}`}>
                <figure>
                    <Image 
                        src={src || '/no-foto.svg'} 
                        alt={name}
                        width={width || 100}
                        height={height || 100}
                        priority/>
                    <figcaption className={styles.bottom}>{name}</figcaption>
                </figure>
            </Link>
        );
    };

    ViewBreedImage.propTypes = {
        breed: PropTypes.object
    };

    const ViewGaleryImage = ({image}) => {
        const {src, id, width, height} = image;
        return (
            <figure>
                <Image 
                    src={src || '/no-foto.svg'} 
                    alt='cat'
                    width={width || 100}
                    height={height || 100}
                    priority/>
                <figcaption className={styles.center}
                            onClick={() => onFigcaptionClick(id)}>
                    <i className='icon_favourite'></i>
                </figcaption>
            </figure>
        );
    };


    ViewGaleryImage.propTypes = {
        image: PropTypes.object
    };

    const ViewVotingImage = ({image}) => {
        const {src, id, value, width, height} = image;
        return (
            <figure>
                <Image 
                    src={src || '/no-foto.svg'}
                    alt='cat'
                    width={width || 100}
                    height={height || 100}
                    priority/>
                <figcaption className={styles.center}
                            onClick={() => onFigcaptionClick(id)}>
                    <i className={`icon_${value}`}></i>
                </figcaption>
            </figure>
        );
    };

    ViewVotingImage.propTypes = {
        image: PropTypes.object
    };

    return(
        <section>
            {setImagesBlock()}
        </section>
    );
};

GridImageSection.propTypes = {
viewImages: PropTypes.arrayOf(PropTypes.object),
onFigcaptionClick: PropTypes.func
};

export default GridImageSection;