import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton, UpdateButton } from "../../buttons/Buttons";
import {LimitFilter, BreedsFilter, OrderFilter, TypeFilter} from '../../filters/PageFilters';
import GridImageSection from "../../gridImageSection/GridImageSection";
import Pagination from "../../pagination/Pagination";

import "./galeryPage.scss";

const GaleryPage = () => {
    return(
        <AppWrapper>
            <aside className="filters_section galery_page">
                <BackButton/>
                <Label text="Galery"/>
                <button className="upload_image">
                    <i className="icon_upload"></i>
                    <span>upload</span> 
                </button>
                <div className="galery_filters">
                    <OrderFilter label/>
                    <TypeFilter label/>
                    <BreedsFilter label/>
                    <LimitFilter label/>
                    <div className="update_block">
                        <UpdateButton/>
                    </div>
                </div>
            </aside>
            <GridImageSection/>
            <Pagination/>
        </AppWrapper>
    )
}

export default GaleryPage;