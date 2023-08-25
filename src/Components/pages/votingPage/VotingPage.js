import { useState, useEffect } from "react";
import useCatServices from "../../../services/CatServices";

import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton, UpdateButton } from "../../buttons/Buttons";
import Spinner from "../../spinner/Spinner";

import "./votingPage.scss";

const VotingPage = () => {
    const {getAllImages, getVotings, getFavouritings, setVote, setFavourite} = useCatServices();
    const [image, setImage] = useState({});
    const [votes, setVotes] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [voteLog, setVoteLog] = useState([]);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [imageLoading, setImageLoading] = useState(true);
    const [logLoading, setLogLoading] = useState(true);

    const page = 0;
    const limit = 1;

    const addToLike = () => {
        setBtnDisabled(true);
        setLogLoading(true);
        setVote({vote: 1, imageId: image.id})
        .then(onLoadVotes);
    };

    const addToFavourite = () => {
        setBtnDisabled(true);
        setLogLoading(true);
        setFavourite({imageId: image.id})
        .then(onLoadVotes);
    };

    const addToDislike = () => {
        setBtnDisabled(true);
        setLogLoading(true);
        setVote({vote: 0, imageId: image.id})
        .then(onLoadVotes);
    };

    const onLoadVotes = () => {
        getVotings({})
        .then(res => setVotes(res));

        getFavouritings({})
        .then(res => setFavourites(res));
    };

    useEffect(() => {
        getAllImages({page, limit})
        .then(res => {
            setImage(...res);
            setImageLoading(false);
        });

        onLoadVotes();
    }, []);

    useEffect(() => {
        setVoteLog(() => 
            votes.concat(favourites)
                 .slice()
                 .sort((a, b) => a.createdTime < b.createdTime ? 1 : -1)
                 .map(vote => {
                 return(
                    <div className="log_row"
                        key={vote.id}>
                        <span className="time">{vote.createdTime}</span>
                            <span className="log_text">Image ID: <strong>{vote.imageId}</strong> was added to {vote.value}s</span>
                        <i className={`icon_${vote.value}`}></i>
                    </div>
                 );
        }));

        setLogLoading(false);

        setBtnDisabled(false);
    }, [votes, favourites]);

    const imageSpiner = imageLoading ? <Spinner/> : null;
    const logSpiner = logLoading ? <Spinner/> : null;
    const loadedImage = !imageLoading && image ? <img src={image.src} alt="cat" /> : null;
    const log =  !logLoading && voteLog ? voteLog : null;
    
    return(
        <AppWrapper>
            <aside className="filters_section voting_page">
                <BackButton/>
                <Label text="Voting"/>
                <UpdateButton/>
            </aside>
            <section className="img_block">
                <div className="image">
                    {imageSpiner}
                    {loadedImage}
                </div>
                <div className="voting_button_block">
                    <button className="add_to_like"
                            onClick={addToLike}
                            disabled={btnDisabled}>
                        <i className="icon_like"></i>
                    </button>
                    <button className="add_to_favourite"
                            onClick={addToFavourite}
                            disabled={btnDisabled}>
                        <i className="icon_favourite"></i>
                    </button>
                    <button className="add_to_dislike"
                            onClick={addToDislike}
                            disabled={btnDisabled}>
                        <i className="icon_dislike"></i>
                    </button>
                </div>
            </section>
            <section className="log_block">
                {logSpiner}
                {log}
            </section>
        </AppWrapper>
    );
};

export default VotingPage;