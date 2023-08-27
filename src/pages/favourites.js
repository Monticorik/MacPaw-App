import { useState, useEffect } from "react";
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

import styles from "@/style/favourites.module.scss";

const FavouritesPage = () => {
    const {getFavouritings, deleteFavourite, loading, error} = useCatServices();
    const [favouriteImages, setFavouriteImages] = useState([]);
    const {viewImages, prevDisabled, nextDisabled,
           setImages,
           onChooseLimit, onPaginationNext, onPaginationPrev} = useUnloadableImage([]);

    const onDeleteFromFavourite = (favouriteId) => {
        deleteFavourite(favouriteId)
        .then( getFavouritings )
        .then(res => {
            setFavouriteImages(res);
        });
    };

    useEffect(() => {
        getFavouritings({})
        .then(res => {
            setFavouriteImages(res);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setImages(favouriteImages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favouriteImages]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const loader = loading ? <Spinner/> : null;
    const content = !loading && !error && favouriteImages ? <GridImageSection 
                                                    viewImages={viewImages} 
                                                    onFigcaptionClick={onDeleteFromFavourite}/> : null;

    return(
        <AppWrapper withoutTabIndex="favourites">
            <aside className={`filters_section favourite_page ${styles.filters_section} ${styles.favourite_page}`}>
                <BackButton/>
                <Label/>
                <LimitFilter
                    onChooseLimit={onChooseLimit}
                    className={styles.limit_filter}/>
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

export default FavouritesPage;