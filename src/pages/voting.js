import { useState, useEffect } from "react";
import useCatServices from "@/services/CatServices";
import Image from 'next/image';

import AppWrapper from "@/components/appWrapper/AppWrapper";
import Label from "@/components//label/Label";
import { BackButton, UpdateButton } from "@/components//buttons/Buttons";
import Spinner from "@/components//spinner/Spinner";
import ErrorMessage from "@/components//error/ErrorMessage";

import styles from "@/style/voting.module.scss";

const VotingPage = () => {
    const {getSingleImage, getVotings, getFavouritings, setVote, setFavourite, loading, error} = useCatServices();
    const [image, setImage] = useState({});
    const [votes, setVotes] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [voteLog, setVoteLog] = useState([]);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const addToLike = () => {
        setBtnDisabled(true);
        setVote({vote: 1, imageId: image.id})
        .then(onLoadVotes);
    };

    const addToFavourite = () => {
        setBtnDisabled(true);
        setFavourite({imageId: image.id})
        .then(onLoadVotes);
    };

    const addToDislike = () => {
        setBtnDisabled(true);
        setVote({vote: 0, imageId: image.id})
        .then(onLoadVotes);
    };

    const onLoadVotes = () => {
        getVotings({})
        .then(res => setVotes(res));

        getFavouritings({})
        .then(res => setFavourites(res));
    };

    const update = () => {
        getSingleImage()
        .then(res => {
            setImage(...res);
        });
    };

    useEffect(() => {
        getSingleImage()
        .then(res => {
            setImage(...res);
        });

        onLoadVotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setVoteLog(() => 
            votes.concat(favourites)
                 .slice()
                 .sort((a, b) => a.createdTime < b.createdTime ? 1 : -1)
                 .map(vote => {
                 return(
                    <div className={styles.log_row}
                        key={vote.id}>
                        <span className={styles.time}>{vote.createdTime.match(/(\d+:\d+)/gi)[0]}</span>
                            <span className={styles.log_text}>Image ID: <strong>{vote.imageId}</strong> was added to {vote.value}s</span>
                        <i className={`icon_${vote.value} ${styles[`log_icon_${vote.value}`]}`}></i>
                    </div>
                 );
        }));

        setBtnDisabled(false);
    }, [votes, favourites]);

    const errorMessage = error ? <ErrorMessage/> : null;
    const loader = loading ? <Spinner/> : null;
    const content = !loading && !error && image ? <Image 
                                                    src={image.src || '/no-foto'} 
                                                    width={image.width || 100} 
                                                    height={image.height || 100} 
                                                    priority 
                                                    alt="cat" /> : null;
    
    return(
        <AppWrapper>
            <aside className={`filters_section voting_page ${styles.filters_section} ${styles.voting_page}`}>
                <BackButton/>
                <Label text="Voting"/>
                <UpdateButton
                    className={styles.update_button}
                    updateFunction={update}/>
            </aside>
            <section className={styles.img_block}>
                <div className={styles.image}>
                    {loader}
                    {errorMessage}
                    {content}
                </div>
                <div className={styles.voting_button_block}>
                    <button className={styles.add_to_like}
                            onClick={addToLike}
                            disabled={btnDisabled}>
                        <i className='icon_like'></i>
                    </button>
                    <button className={styles.add_to_favourite}
                            onClick={addToFavourite}
                            disabled={btnDisabled}>
                        <i className='icon_favourite'></i>
                    </button>
                    <button className={styles.add_to_dislike}
                            onClick={addToDislike}
                            disabled={btnDisabled}>
                        <i className='icon_dislike'></i>
                    </button>
                </div>
            </section>
            <section className={styles.log_block}>
                {voteLog}
            </section>
        </AppWrapper>
    );
};

export default VotingPage;