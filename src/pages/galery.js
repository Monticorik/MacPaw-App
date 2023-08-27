import { useState, useEffect, useRef } from "react";
import useCatServices from "@/services/CatServices";

import AppWrapper from "@/components/appWrapper/AppWrapper";
import Label from "@/components/label/Label";
import { BackButton, UpdateButton } from "@/components/buttons/Buttons";
import {LimitFilter, BreedsFilter, OrderFilter, TypeFilter} from '@/components/filters/PageFilters';
import GridImageSection from "@/components/gridImageSection/GridImageSection";
import Pagination from "@/components/pagination/Pagination";
import Spinner from "@/components/spinner/Spinner";
import ErrorMessage from "@/components/error/ErrorMessage";
import UploadImageModal from "@/components/modal/UploadImageModal";

import styles from "@/style/galery.module.scss";

const GaleryPage = () => {
    const {getAllBreeds, getAllImages, setFavourite, loading, error} = useCatServices();

    //option and images
    const [allBreeds, setAllBreeds] = useState([]);
    const [viewImages, setViewImages] = useState([]);
    const [breedsOptions, setBreedsOptions] = useState([{ value: '', label: 'All breeds', }]);
    const allImages = useRef([]);

    //filters
    const order = useRef('RANDOM');
    const type = useRef('jpg,png');
    const breedId = useRef('');
    const limit = useRef(5);

    //pagination
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(true);
    const page = useRef(0);

    //upload image modal
    const [isOpen, setIsOpen] = useState(false);

    const onRequest = () => {
        getAllImages({limit: limit.current,
                      order: order.current,
                      type: type.current,
                      breedId: breedId.current,
                      page: page.current, 
                      })
        .then(onImageLoaded);
    };

    const onImageLoaded = (newImages) => {
        let end = false;
        if(newImages.length < limit.current) end = true; 

        if(!end) {
            allImages.current = ([...allImages.current, ...newImages]);
            allImages.current.length = (page.current * limit.current) + limit.current;

            onChangeViewImages();

            setNextDisabled(false);
        } else {
            setNextDisabled(true);
            //in first, user click 'next' button, that change page value and then we got respons and check 'end'
            //so we must check and if page != 0 -> return page value to the previous
            if(page.current !== 0) page.current--;
            if(page.current === 0) setPrevDisabled(true);
        }
    };

    const onChangeViewImages = () => {
        const offset = page.current * limit.current;
        setViewImages(allImages.current.slice((offset), (offset + limit.current)));
    };

    const onChangeOrder = (option) => {
        filterStartSettings();
        order.current = option;

        onRequest();
    };

    const onChangeType = (option) => {
        filterStartSettings();
        type.current = option;

        onRequest();
    };

    const onChangeBreedId = (option) => {
        filterStartSettings();
        breedId.current = option;

        onRequest();
    };

    const onChangeLimit = (option) => {
        limit.current = +option;
        page.current = Math.trunc(allImages.current.length / limit.current - 1);

        //this check need because if order === 'Random' the code remove image thet user alredy seen
        //but if order !== 'Random', we remove image that will load later
        if(order.current !== 'RANDOM' || 
           breedId.current){
                allImages.current.length = page.current * limit.current;
        }

        onRequest();
    };

    const filterStartSettings = () => {
        setPrevDisabled(true);
        allImages.current = [];
        page.current = 0;
    };

    const onAddToFavourite = (id) => {
        setFavourite({imageId: id});
    };

    const onPaginationNext = () => {
        page.current++;
        setPrevDisabled(false);

        //check if the user went back and then began to switch pages forward again
        //if element undefined we will send requaest, if element is present, the request is not needed
        if(!allImages.current[page.current * limit.current]){
            onRequest();
        } else {
            onChangeViewImages();
        }
    };

    const onPaginationPrev = () => {
        if(page.current > 0){
            page.current--;
        } 

        page.current === 0 ? setPrevDisabled(true) : setNextDisabled(false);

        onChangeViewImages();
    };

    const update = () => {
        allImages.current = [];
        page.current = 0;
        onRequest(); 
    };

    const toggleUploadImageModal = () => {
        document.querySelector('body').classList.toggle('modal-is-open');
        setIsOpen(!isOpen);
    };

    // const closeUploadImageModal = () => {
    //     document.querySelector('body').classList.toggle('modal-is-open');
    //     setIsOpen(!isOpen);
    // }

    useEffect(() => {
        getAllBreeds()
        .then(res => {
            setAllBreeds([...res]);
        });

        onRequest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const options = allBreeds.map(breed => {
            return {
                value: breed.id,
                label: breed.name,
            };
        });
        
        setBreedsOptions([breedsOptions[0], ...options]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allBreeds]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const loader = loading ? <Spinner/> : null;
    const content = !loading && !error && viewImages ? <GridImageSection 
                                                    viewImages={viewImages} 
                                                    onFigcaptionClick={onAddToFavourite}/> : null;

    return(
        <AppWrapper>
            <aside className={`filters_section galery_page ${styles.filters_section} ${styles.galery_page}`}>
                <BackButton/>
                <Label text="Galery"/>
                <button className={styles.upload_image}
                    onClick={toggleUploadImageModal}>
                    <i className="icon_upload"></i>
                    <span>upload</span> 
                </button>
                <div className={styles.galery_filters}>
                    <OrderFilter 
                        label
                        onChooseOrder={onChangeOrder}
                        className={styles.order_filter}
                        pageName={'galery'}/>
                    <TypeFilter 
                        label
                        onChooseType={onChangeType}
                        className={styles.type_filter}
                        pageName={'galery'}/>
                    <BreedsFilter 
                        label 
                        breedsOptions={breedsOptions}
                        onChooseBreed={onChangeBreedId}
                        className={styles.breeds_filter}
                        pageName={'galery'}/>
                    <LimitFilter 
                        label
                        onChooseLimit={onChangeLimit}
                        className={styles.limit_filter}
                        pageName={'galery'}/>
                    <div className={styles.update_block}>
                        <UpdateButton 
                            updateFunction={update}/>
                    </div>
                </div>
            </aside>
            {loader}
            {errorMessage}
            {content}
            <Pagination
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
                onPaginationNext={onPaginationNext}
                onPaginationPrev={onPaginationPrev}
                />
            <UploadImageModal
                isOpen={isOpen}
                closeModal={toggleUploadImageModal}>
            </UploadImageModal>
            
        </AppWrapper>
    );
};

export default GaleryPage;