import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton } from "../../buttons/Buttons";
import {LimitFilter, BreedsFilter} from '../../filters/PageFilters';
import GridImageSection from "../../gridImageSection/GridImageSection";
import Pagination from "../../pagination/Pagination";


import './breedPage.scss';


const BreedsPage = () => {
    return(
        <AppWrapper>
            <aside className="filters_section breed_page">
                <BackButton/>
                <Label/>
                <BreedsFilter/>
                <LimitFilter/>
                <button className="sort">
                    <i className="icon_sort"></i>
                </button>
                <button className="sort_revers">
                    <i className="icon_sort_revers"></i>
                </button>
            </aside>
            <GridImageSection/>
            <Pagination/>
        </AppWrapper>
    )
}

export default BreedsPage;