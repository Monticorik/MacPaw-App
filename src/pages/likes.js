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

import styles from "@/style/likes.module.scss";

const LikesPage = () => {
    const {getVotings, deleteVote,loading, error} = useCatServices();
    const [likeImages, setLikeImages] = useState([]);
    const {viewImages, prevDisabled, nextDisabled,
           setImages,
           onChooseLimit, onPaginationNext, onPaginationPrev} = useUnloadableImage([]);

    const onDeleteFromLike = (voteId) => {
        deleteVote(voteId)
        .then(getVotings)
        .then(res => {
            const likeImages = res.filter(image => image.value === 'like');
            setLikeImages(likeImages);
        });
    };

    useEffect(() => {
        getVotings({})
        .then(res => {
            const likeImages = res.filter(image => image.value === 'like');
            setLikeImages(likeImages);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setImages(likeImages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [likeImages]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const loader = loading ? <Spinner/> : null;
    const content = !loading && !error && likeImages ? <GridImageSection 
                                                viewImages={viewImages} 
                                                onFigcaptionClick={onDeleteFromLike}/> : null;
    
    return(
        <AppWrapper withoutTabIndex="likes">
            <aside className={`filters_section like_page ${styles.filters_section} ${styles.like_page}`}>
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

export default LikesPage;