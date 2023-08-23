import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton } from "../../buttons/Buttons";
import GridImageSection from "../../gridImageSection/GridImageSection";
import Pagination from "../../pagination/Pagination";

import "./favouritesPage.scss";

const FavouritesPage = () => {
    return(
        <AppWrapper withoutTabIndex="favourites">
            <aside className="filters_section favourite_page">
                <BackButton/>
                <Label/>
            </aside>
            <GridImageSection/>
            <Pagination/>
        </AppWrapper>
    )
}

export default FavouritesPage;