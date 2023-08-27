import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import useCatServices from "@/services/CatServices";
import useUnloadableImage from "@/hooks/unloadableImageHook";

import AppWrapper from "@/components/appWrapper/AppWrapper";
import { BackButton } from "@/components/buttons/Buttons";
import Label from "@/components/label/Label";
import { LimitFilter } from "@/components/filters/PageFilters";
import GridImageSection from "@/components/gridImageSection/GridImageSection";
import Pagination from "@/components/pagination/Pagination";
import Spinner from "@/components/spinner/Spinner";
import ErrorMessage from "@/components/error/ErrorMessage";

import styles from "@/style/[searchValue].module.scss";

const SearchPage = () => {
    const { searchValue } = useRouter().query;
    const { getSearchBreeds, loading, error } = useCatServices();
    const [searchBreeds, setSearchBreeds] = useState([]);
    const {viewImages, prevDisabled, nextDisabled,
           setImages,
           onChooseLimit, onPaginationNext, onPaginationPrev} = useUnloadableImage([]);

    useEffect(() => {
        getSearchBreeds(searchValue)
        .then(res => {
            setSearchBreeds(res);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    useEffect(() => {
        setImages(searchBreeds);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchBreeds]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const loader = loading ? <Spinner/> : null;
    const noResults = !loading && !error && searchBreeds.length === 0 ?   <div className={styles.search_title}>
                                                                    <span>No results found for: </span>
                                                                    <span className={styles.searchValue}>{searchValue}</span>  
                                                                </div> : null;
    const content = !loading && !error && searchBreeds.length > 0 ? <GridImageSection 
                                                                viewImages={viewImages}/> : null;

    return(
        <AppWrapper>
            <aside className={`filters_section search_page ${styles.filters_section} ${styles.search_page}`}>
                <BackButton/>
                <Label label="search"/>
                <LimitFilter
                    onChooseLimit={onChooseLimit}
                    className={styles.limit_filter}/>
            </aside>
            <div className={styles.search_title}>
                    <span>Search results for: </span>
                    <span className={styles.searchValue}>{searchValue}</span>  
            </div>
            {loader}
            {errorMessage}
            {noResults}
            {content}
            <Pagination
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
                onPaginationNext={onPaginationNext}
                onPaginationPrev={onPaginationPrev}/>
        </AppWrapper>
    );
};

export default SearchPage;