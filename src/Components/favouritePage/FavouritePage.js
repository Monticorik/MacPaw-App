import AppWrapper from "../appWrapper/AppWrapper";
import Label from "../label/Label";
import { BackButton } from "../buttons/Buttons";
import GridImageSection from "../gridImageSection/GridImageSection";
import Pagination from "../pagination/Pagination";

import "./favouritePage.scss";

const FavouritePage = () => {
    return(
        <AppWrapper withoutTabIndex="favourites">
            <aside className="filters_section">
                <BackButton/>
                <Label text="Favourites"/>
            </aside>
            <GridImageSection/>
            <Pagination/>
        </AppWrapper>
    )
}

export default FavouritePage;