import AppWrapper from "../appWrapper/AppWrapper";
import Label from "../label/Label";
import { BackButton } from "../buttons/Buttons";
import {LimitFilter, BreedsFilter} from '../filters/PageFilters';
import GridImageSection from "../gridImageSection/GridImageSection";
import Pagination from "../pagination/Pagination";


import './breeds.scss';


const Breeds = () => {
    return(
        <AppWrapper>
            <aside className="filters_section">
                <BackButton/>
                <Label text="Breeds"/>
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

export default Breeds;