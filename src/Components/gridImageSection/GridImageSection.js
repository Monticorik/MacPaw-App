import PropTypes from 'prop-types';

import "./gridImageSection.scss";

const GridImageSection = (props) => {
    const {viewImages} = props;

    const firstImagePositionStyle = [
        {gridArea: "1 / 1 / 3 / 2"},
        {gridArea: "1 / 2 / 2 / 3"},
        {gridArea: "1 / 3 / 2 / 4"},
        {gridArea: "3 / 1 / 4 / 2"},
        {gridArea: "2 / 2 / 4 / 4"},
    ];

    const secondImagePositionStyle = [
        {gridArea: "1 / 1 / 2 / 2"},
        {gridArea: "1 / 2 / 2 / 3"},
        {gridArea: "1 / 3 / 3 / 4"},
        {gridArea: "2 / 1 / 4 / 3"},
        {gridArea: "3 / 3 / 4 / 4"},
    ];

    const setImagesBlock = () => {
        const images = [];

        //this cicle divide image array on chunk with 5 objects
        for(let i = 0; i < viewImages.length; i += 5) {
            const arr = viewImages.slice(i, i + 5);
            //index(i) can only be 0, 5, 10, 15, etc.
            //if 'i' has a remainder when divided by 10, we return the correct position style array
            const positionStyleList = i % 10 ? secondImagePositionStyle : firstImagePositionStyle;
            images.push(imageListHandler(arr, positionStyleList));
        }

        return(
            <>
                {images}
            </>
        );
    };

    const imageListHandler = (imageList, positionStyleList) => {
        const images = imageList.map((image, index) => {
                                return(
                                    <div className="grid_img"
                                        style={positionStyleList[index % 5]}
                                        key={image.id}>
                                        <figure>
                                            <img src={image.image} alt={image.name}/>
                                            <figcaption>{image.name}</figcaption>
                                        </figure>
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

export default GridImageSection;