import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton, UpdateButton } from "../../buttons/Buttons";

import "./votingPage.scss";
import cat from "../../../resources/img/news_file_3846_5ea8a69e48534.jpg";

const VotingPage = () => {
    return(
        <AppWrapper>
            <aside className="filters_section voting_page">
                <BackButton/>
                <Label text="Voting"/>
                <UpdateButton/>
            </aside>
            <section className="img_block">
                <div className="image">
                    <img src={cat} alt="cat" />
                </div>
                <div className="voting_button_block">
                    <button className="add_to_like">
                        <i className="icon_like"></i>
                    </button>
                    <button className="add_to_favourite">
                        <i className="icon_favourite"></i>
                    </button>
                    <button className="add_to_dislike">
                        <i className="icon_dislike"></i>
                    </button>
                </div>
            </section>
            <section className="log_block">
                <div className="log_row">
                    <span className="time">22:06</span>
                    <span className="log_text">Image ID: <strong>3ll</strong> was added to Likes</span>
                    <i className="icon_like"></i>
                </div>
            </section>
        </AppWrapper>
    );
};

export default VotingPage;