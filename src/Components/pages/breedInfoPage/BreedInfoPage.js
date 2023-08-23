//Slider made with using "react-slick".
//Documentation for this API - https://react-slick.neostack.com/docs/api;

import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton } from "../../buttons/Buttons";
import Slider from "react-slick";

import cat from "../../../resources/img/news_file_3846_5ea8a69e48534.jpg";
import "./breedInfoPage.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const BreedInfoPage = () => {

    const imgList = [
        {src:cat, alt: "cat"},
        {src:cat, alt: "cat"},
        {src:cat, alt: "cat"},
        {src:cat, alt: "cat"},
        {src:cat, alt: "cat"},
    ]

    const setSlider = () => {
        const slides = imgList.map((img, index) => {
            return(
                <img src={img.src} alt={img.alt}/>
            )
        })

        const sliderSettings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            appendDots: dots => (
                <div id="custom_dots">
                  <ul> {dots} </ul>
                </div>
              ),
        }

        return(
            <Slider {...sliderSettings}>
                {slides}
            </Slider>
        )
    }

    return(
        <AppWrapper>
            <aside className="filters_section breed_info_page">
                <BackButton/>
                <Label color="pink"/>
                <Label text="breeds id"/>
            </aside>
            <section>
                <div className="breed_images_slider">
                    {setSlider()}
                </div>
            </section>
            <section className="breed_info">
                <div className="breed_name">
                    <h1>Abyssinian</h1>
                </div>
                <div className="breed_description">
                    <span>The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.</span>
                </div>
                <div className="breed_temperament">
                    <span><strong>Temperament:</strong></span>
                    <span>Active, Energetic, Independent, Intelligent, Gentle</span>
                </div>
                <div className="breed_other_info">
                    <div className="origin">
                        <span><strong>Origin:</strong></span>
                        <span>Egypt</span>
                    </div>
                    <div className="weight">
                        <span><strong>Weight:</strong></span>
                        <span>3 - 5 kgs</span>
                    </div>
                    <div className="life_span">
                        <span><strong>Life span:</strong></span>
                        <span>14 - 15 years</span>
                    </div>
                </div>
            </section>
        </AppWrapper>
    )
}

export default BreedInfoPage;