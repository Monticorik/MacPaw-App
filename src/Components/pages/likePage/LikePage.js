//check style after routing;

import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton } from "../../buttons/Buttons";
import GridImageSection from "../../gridImageSection/GridImageSection";
import Pagination from "../../pagination/Pagination";

import "./likePage.scss";

const LikePage = () => {
    return(
        <AppWrapper withoutTabIndex="likes">
            <aside className="filters_section">
                <BackButton/>
                <Label text="Likes"/>
            </aside>
            <GridImageSection/>
            <Pagination/>
        </AppWrapper>
    )
}

export default LikePage;