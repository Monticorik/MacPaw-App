import { useState, useEffect } from "react";
import useCatServices from "@/services/CatServices";
import useUnloadableImage from "@/hooks/unloadableImageHook";

import AppWrapper from "@/components/appWrapper/AppWrapper";
import Label from "@/components/label/Label";
import { BackButton } from "@/components/buttons/Buttons";
import {LimitFilter, BreedsFilter} from '@/components/filters/PageFilters';
import GridImageSection from "@/components/gridImageSection/GridImageSection";
import Pagination from "@/components/pagination/Pagination";
import Spinner from "@/components/spinner/Spinner";
import ErrorMessage from "@/components/error/ErrorMessage";

import styles from '@/style/breed.module.scss';


const BreedsPage = () => {
    const {getAllBreeds, loading, error} = useCatServices();
    const [allBreeds, setAllBreeds] = useState([]);
    const {viewImages, breedsOptions, sort, reversSort, prevDisabled, nextDisabled,
           setImages,
           onChooseBreed, onChooseLimit, onSort, onReversSort, onPaginationNext, onPaginationPrev} = useUnloadableImage([]);

    useEffect(() => {
        getAllBreeds()
        .then(res => {
            setAllBreeds([...res]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setImages(allBreeds);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allBreeds]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const loader = loading ? <Spinner/> : null;
    const content = !loading && !error && allBreeds ? <GridImageSection viewImages={viewImages}/> : null;

    return(
        <AppWrapper>
            <aside className={`filters_section breed_page ${styles.filters_section} ${styles.breed_page}`}>
                <BackButton/>
                <Label/>
                <BreedsFilter 
                    breedsOptions={breedsOptions} 
                    onChooseBreed={onChooseBreed}
                    className={styles.breeds_filter}/>
                <LimitFilter
                    onChooseLimit={onChooseLimit}
                    className={styles.limit_filter}/>
                <button className={styles.sort}
                        disabled={sort.current}
                        onClick={onSort}>
                    <i className='icon_sort'></i>
                </button>
                <button className={styles.sort_revers}
                        disabled={reversSort.current}
                        onClick={onReversSort}>
                    <i className='icon_sort_revers'></i>
                </button>
            </aside>
            {loader}
            {errorMessage}
            {content}
            <Pagination 
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
                onPaginationNext={onPaginationNext}
                onPaginationPrev={onPaginationPrev}/>
        </AppWrapper>
    );
};

export default BreedsPage;