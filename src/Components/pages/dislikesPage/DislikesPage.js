import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton } from "../../buttons/Buttons";
import GridImageSection from "../../gridImageSection/GridImageSection";
import Pagination from "../../pagination/Pagination";

import "./dislikesPage.scss";

const DislikesPage = () => {
    return(
        <AppWrapper withoutTabIndex="dislikes">
            <aside className="filters_section dislike_page">
                <BackButton/>
                <Label/>
            </aside>
            <GridImageSection/>
            <Pagination/>
        </AppWrapper>
    );
};

export default DislikesPage;