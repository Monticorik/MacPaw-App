import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import "./gridImageSection.scss";

const GridImageSection = (props) => {
    const {viewImages} = props;
    const pageName = useLocation().pathname.slice(1);

    const setImagesBlock = () => {
        const images = [];

        //this cicle divide image array on chunk with 5 objects
        //each chunk is handled by function that return a component
        for(let i = 0; i < viewImages.length; i += 5) {
            const arr = viewImages.slice(i, i + 5);
            images.push(imageListHandler(arr));
        }

        return(
            <>
                {images}
            </>
        );
    };

    const imageListHandler = (imageList) => {
        const images = imageList.map(image => {
                                return(
                                    <div className="grid_img"
                                        key={image.id}>
                                        {pageName === 'breed' ? <ViewBreedImage breed={image}/> :
                                         pageName === 'galery' ? <ViewGaleryImage image={image}/> : null}
                                    </div>
                                );
                        });

        return(
            <div className="images_block">
                {images}
            </div>
        );
    };

    return(
        <section>
            {setImagesBlock()}
        </section>
    );
};

GridImageSection.propTypes = {
    viewImages: PropTypes.arrayOf(PropTypes.object)
};

const ViewBreedImage = ({breed}) => {
    const {id, name, src} = breed;
    return (
        <Link to={`/breed/${id}`}>
            <figure>
                <img src={src} alt={name}/>
                <figcaption className="breed">{name}</figcaption>
            </figure>
        </Link>
    );
};

ViewBreedImage.propTypes = {
    breed: PropTypes.object
};

const ViewGaleryImage = ({image}) => {
    const {src} = image;
    return (
        <figure>
            <img src={src} alt='cat'/>
            <figcaption className="galery">
                <i className="icon_favourite_full"></i>
            </figcaption>
        </figure>
    );
};

ViewGaleryImage.propTypes = {
    image: PropTypes.object
};

export default GridImageSection;