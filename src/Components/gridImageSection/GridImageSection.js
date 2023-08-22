import cat from "../../resources/img/news_file_3846_5ea8a69e48534.jpg";
import "./gridImageSection.scss";

const GridImageSection = () => {

    const rightImagePositionStyle = [
        {gridArea: "1 / 1 / 3 / 2"},
        {gridArea: "1 / 2 / 2 / 3"},
        {gridArea: "1 / 3 / 2 / 4"},
        {gridArea: "3 / 1 / 4 / 2"},
        {gridArea: "2 / 2 / 4 / 4"},
    ]

    const leftImagePositionStyle = [
        {gridArea: "4 / 1 / 5 / 2"},
        {gridArea: "4 / 2 / 5 / 3"},
        {gridArea: "4 / 3 / 6 / 4"},
        {gridArea: "5 / 1 / 7 / 3"},
        {gridArea: "6 / 3 / 7 / 4"},
    ]

    const imgArr = [
        {src:cat, alt:'cat'},
        {src:cat, alt:'cat'},
        {src:cat, alt:'cat'},
        {src:cat, alt:'cat'},
        {src:cat, alt:'cat'},
    ]

    const setImageLayout = () => {
        const images = imgArr.map((element, index) => {
                            const imageGridPosition = index % 10 < 5 ? rightImagePositionStyle[index % 5] : leftImagePositionStyle[index % 5];
                            return(
                                <div className="grid_img"
                                     style={imageGridPosition}
                                     key={index}>
                                    <img src={element.src} alt={element.alt}/>
                                </div>
                            )
                       })

        return(
            <>
                {images}
            </>
        )
    }

    return(
        <section>
            <div className="images">
                {setImageLayout()}
            </div>
        </section>
    )
}

export default GridImageSection;