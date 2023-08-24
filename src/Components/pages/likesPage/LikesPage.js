//check style after routing;

import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton } from "../../buttons/Buttons";
import GridImageSection from "../../gridImageSection/GridImageSection";
import Pagination from "../../pagination/Pagination";

import "./likesPage.scss";

const LikesPage = () => {
    return(
        <AppWrapper withoutTabIndex="likes">
            <aside className="filters_section like_page">
                <BackButton/>
                <Label/>
            </aside>
            <GridImageSection/>
            <Pagination/>
        </AppWrapper>
    );
};

export default LikesPage;