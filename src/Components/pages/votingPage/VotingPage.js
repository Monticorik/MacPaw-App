import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton, UpdateButton } from "../../buttons/Buttons";

import "./votingPage.scss";
import cat from "../../../resources/img/news_file_3846_5ea8a69e48534.jpg";

const VotingPage = () => {
    return(
        <AppWrapper>
            <aside className="filters_section">
                <BackButton/>
                <Label text="Voting"/>
                <UpdateButton/>
            </aside>
            <section className="img_block">
                <div className="image">
                    <img src={cat} alt="cat" />
                </div>
                <div className="voting_button_block">
                    <button class="add_to_like">
                        <i class="icon_like"></i>
                    </button>
                    <button class="add_to_favourite">
                        <i class="icon_favourite"></i>
                    </button>
                    <button class="add_to_dislike">
                        <i class="icon_dislike"></i>
                    </button>
                </div>
            </section>
            <section className="log_block">
                <div class="log_row">
                    <span class="time">22:06</span>
                    <span class="log_text">Image ID: <strong>3ll</strong> was added to Likes</span>
                    <i class="icon_like"></i>
                </div>
            </section>
        </AppWrapper>
    )
}

export default VotingPage;