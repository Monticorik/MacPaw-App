import AppWrapper from "../appWrapper/AppWrapper";
import Label from "../label/Label";
import { BackButton } from "../buttons/Buttons";
import GridImageSection from "../gridImageSection/GridImageSection";
import Pagination from "../pagination/Pagination";

import "./dislikePage.scss";

const DislikePage = () => {
    return(
        <AppWrapper withoutTabIndex="dislikes">
            <aside className="filters_section">
                <BackButton/>
                <Label text="Dislikes"/>
            </aside>
            <GridImageSection/>
            <Pagination/>
        </AppWrapper>
    )
}

export default DislikePage;