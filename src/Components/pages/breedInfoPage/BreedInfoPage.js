//Slider made with using "react-slick".
//Documentation for this API - https://react-slick.neostack.com/docs/api;
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useCatServices from "../../../services/CatServices";

import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton } from "../../buttons/Buttons";
import Slider from "react-slick";
import Spinner from "../../spinner/Spinner";

import "./breedInfoPage.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const BreedInfoPage = () => {
    const {breedId} = useParams();
    const {name, description, temperament, origin, weight, lifeSpan} = useLocation().state;
    const {getAllImages, loading} = useCatServices();
    const [images, setImages] = useState(null);

    const limit = 15;

    useEffect(() => {
        getAllImages(limit, undefined, undefined, undefined, breedId)
        .then(res => {
            setImages(res);
        });
    }, []);

    const setSlider = () => {
        const slides = images.map((image) => {
            return(
                <img src={image.src} 
                     key={image.id}
                     alt='cat'/>
            );
        });

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
        };

        return(
            <Slider {...sliderSettings}>
                {slides}
            </Slider>
        );
    };

    const loader = loading ? <Spinner/> : null;
    const content = !loading && images ? setSlider() : null;

    return(
        <AppWrapper>
            <aside className="filters_section breed_info_page">
                <BackButton/>
                <Label color="pink"
                       label="breed"/>
                <Label label={breedId}/>
            </aside>
            <section>
                <div className="breed_images_slider">
                    {loader}
                    {content}
                </div>
            </section>
            <section className="breed_info">
                <div className="breed_name">
                    <h1>{name}</h1>
                </div>
                <div className="breed_description">
                    <span>{description}</span>
                </div>
                <div className="breed_temperament">
                    <span><strong>Temperament:</strong></span>
                    <span>{temperament}</span>
                </div>
                <div className="breed_other_info">
                    <div className="origin">
                        <span><strong>Origin:</strong></span>
                        <span>{origin}</span>
                    </div>
                    <div className="weight">
                        <span><strong>Weight:</strong></span>
                        <span>{weight}</span>
                    </div>
                    <div className="life_span">
                        <span><strong>Life span:</strong></span>
                        <span>{lifeSpan}</span>
                    </div>
                </div>
            </section>
        </AppWrapper>
    );
};

export default BreedInfoPage;