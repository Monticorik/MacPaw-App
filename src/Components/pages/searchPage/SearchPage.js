import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCatServices from "../../../services/CatServices";
import useUnloadableImage from "../../../hooks/unloadableImageHook";

import AppWrapper from "../../appWrapper/AppWrapper";
import { BackButton } from "../../buttons/Buttons";
import Label from "../../label/Label";
import { LimitFilter } from "../../filters/PageFilters";
import GridImageSection from "../../gridImageSection/GridImageSection";
import Pagination from "../../pagination/Pagination";
import Spinner from "../../spinner/Spinner";

import "./searchPage.scss";

const SearchPage = () => {
    const { searchValue } = useParams();
    const { getSearchBreeds, loading } = useCatServices();
    const [searchBreeds, setSearchBreeds] = useState([]);
    const {viewImages, prevDisabled, nextDisabled,
           setImages,
           onChooseLimit, onPaginationNext, onPaginationPrev} = useUnloadableImage([]);

    useEffect(() => {
        getSearchBreeds(searchValue)
        .then(res => {
            setSearchBreeds(res);
        });
    }, [searchValue]);

    useEffect(() => {
        setImages(searchBreeds);
    }, [searchBreeds]);

    const loader = loading ? <Spinner/> : null;
    const noResults = !loading && searchBreeds.length === 0 ?   <div className="search-title">
                                                                    <span>No results found for: </span>
                                                                    <span className="searchValue">{searchValue}</span>  
                                                                </div> : null;
    const content = !loading && searchBreeds.length > 0 ? <GridImageSection 
                                                                viewImages={viewImages}/> : null;

    return(
        <AppWrapper>
            <aside className="filters_section search_page">
                <BackButton/>
                <Label label="search"/>
                <LimitFilter
                    onChooseLimit={onChooseLimit}/>
            </aside>
            <div className="search-title">
                    <span>Search results for: </span>
                    <span className="searchValue">{searchValue}</span>  
            </div>
            {loader}
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