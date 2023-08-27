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

import styles from "@/style/dislikes.module.scss";

const DislikesPage = () => {
    const {getVotings, deleteVote, loading, error} = useCatServices();
    const [dislikeImages, setDislikeImages] = useState([]);
    const {viewImages, prevDisabled, nextDisabled,
           setImages,
           onChooseLimit, onPaginationNext, onPaginationPrev} = useUnloadableImage([]);

    const onDeleteFromDislike = (voteId) => {
        deleteVote(voteId)
        .then(getVotings)
        .then(res => {
            const likeImages = res.filter(image => image.value === 'dislike');
            setDislikeImages(likeImages);
        });
    };

    useEffect(() => {
        getVotings({})
        .then(res => {
            const likeImages = res.filter(image => image.value === 'dislike');
            setDislikeImages(likeImages);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setImages(dislikeImages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dislikeImages]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const loader = loading ? <Spinner/> : null;
    const content = !loading && !error && dislikeImages ? <GridImageSection 
                                                    viewImages={viewImages} 
                                                    onFigcaptionClick={onDeleteFromDislike}/> : null;

    return(
        <AppWrapper withoutTabIndex="dislikes">
            <aside className={`filters_section dislike_page ${styles.filters_section} ${styles.dislike_page}`}>
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

export default DislikesPage;