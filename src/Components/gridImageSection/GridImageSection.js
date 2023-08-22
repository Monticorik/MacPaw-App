import cat from "../../resources/img/news_file_3846_5ea8a69e48534.jpg";
import "./gridImageSection.scss";

const GridImageSection = () => {

    const firstImagePositionStyle = [
        {gridArea: "1 / 1 / 3 / 2"},
        {gridArea: "1 / 2 / 2 / 3"},
        {gridArea: "1 / 3 / 2 / 4"},
        {gridArea: "3 / 1 / 4 / 2"},
        {gridArea: "2 / 2 / 4 / 4"},
    ]

    const secondImagePositionStyle = [
        {gridArea: "1 / 1 / 2 / 2"},
        {gridArea: "1 / 2 / 2 / 3"},
        {gridArea: "1 / 3 / 3 / 4"},
        {gridArea: "2 / 1 / 4 / 3"},
        {gridArea: "3 / 3 / 4 / 4"},
    ]

    const imgList = [
        {src:cat, alt:'cat'},
        {src:cat, alt:'cat'},
        {src:cat, alt:'cat'},
        {src:cat, alt:'cat'},
        {src:cat, alt:'cat'},
    ]

    const setImagesBlock = () => {
        const images = [];

        for(let i = 0; i < imgList.length; i += 5) {
            const arr = imgList.slice(i, i + 5);
            const positionStyleList = i % 10 ? secondImagePositionStyle : firstImagePositionStyle;
            images.push(imageListHandler(arr, positionStyleList));
        }

        return(
            <>
                {images}
            </>
        )
    }

    const imageListHandler = (list, positionStyleList) => {
        const imageList = list.map((image, index) => {
                                return(
                                    <div className="grid_img"
                                        style={positionStyleList[index % 5]}
                                        key={index}>
                                        <figure>
                                            <img src={image.src} alt={image.alt}/>
                                            <figcaption>{image.alt}</figcaption>
                                        </figure>
                                    </div>
                                )
                        })

        return(
            <div className="images_block">
                {imageList}
            </div>
        )
    }

    return(
        <section>
            {setImagesBlock()}
        </section>
    )
}

export default GridImageSection;