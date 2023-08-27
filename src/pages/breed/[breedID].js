//Slider made with using "react-slick".
//Documentation for this API - https://react-slick.neostack.com/docs/api;
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import useCatServices from "@/services/CatServices";
import Image from 'next/image';

import AppWrapper from "@/components/appWrapper/AppWrapper";
import Label from "@/components/label/Label";
import { BackButton } from "@/components/buttons/Buttons";
import Slider from "react-slick";
import Spinner from "@/components/spinner/Spinner";
import ErrorMessage from "@/components/error/ErrorMessage";

import styles from "@/style/[breedID].module.scss";

const BreedInfoPage = () => {
    const {breedID} = useRouter().query;
    const {getSingleBreed, loading, error} = useCatServices();

    const [images, setImages] = useState(null);
    const [breedInfo, setBreedInfo] = useState({name: '', 
                                                description: '', 
                                                temperament: '', 
                                                origin: '', 
                                                weight: '', 
                                                lifeSpan: ''});

    useEffect(() => {
        getSingleBreed(breedID)
        .then(res => {
            setBreedInfo({...res[0]});
            setImages(res);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [breedID]);

    const setSlider = () => {
        const slides = images.map((image) => {
            return(
                <Image src={image.src || '/no-foto.svg'} 
                     key={image.id}
                     width={image.width || 100}
                     height={image.height || 100}
                     priority
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
                <div id={styles.custom_dots}>
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

    const {name, description, temperament, origin, weight, lifeSpan} = breedInfo;
    const errorMessage = error ? <ErrorMessage/> : null;
    const loader = loading ? <Spinner/> : null;
    const content = !loading && images ? setSlider() : null;

    return(
        <AppWrapper>
            <aside className={`filters_section breed_info_page ${styles.filters_section} ${styles.breed_info_page}`}>
                <BackButton/>
                <Label color="pink"
                       label="breed"/>
                <Label label={breedID}
                       className={styles.label}/>
            </aside>
            <section>
                <div className={styles.breed_images_slider}>
                    {loader}
                    {errorMessage}
                    {content}
                </div>
            </section>
            <section className={styles.breed_info}>
                <div className={styles.breed_name}>
                    <h1>{name}</h1>
                </div>
                <div className={styles.breed_description}>
                    <span>{description}</span>
                </div>
                <div className={styles.breed_temperament}>
                    <span><strong>Temperament:</strong></span>
                    <span>{temperament}</span>
                </div>
                <div className={styles.breed_other_info}>
                    <div className={styles.origin}>
                        <span><strong>Origin:</strong></span>
                        <span>{origin}</span>
                    </div>
                    <div className={styles.weight}>
                        <span><strong>Weight:</strong></span>
                        <span>{weight}</span>
                    </div>
                    <div className={styles.life_span}>
                        <span><strong>Life span:</strong></span>
                        <span>{lifeSpan}</span>
                    </div>
                </div>
            </section>
        </AppWrapper>
    );
};

export default BreedInfoPage;