import { useState, useEffect } from "react";

import AppWrapper from "../../appWrapper/AppWrapper";
import Label from "../../label/Label";
import { BackButton } from "../../buttons/Buttons";
import {LimitFilter, BreedsFilter} from '../../filters/PageFilters';
import GridImageSection from "../../gridImageSection/GridImageSection";
import Pagination from "../../pagination/Pagination";
import Spinner from "../../spinner/Spinner";

import useCatServices from "../../../services/CatServices";

import './breedPage.scss';


const BreedsPage = () => {
    const {loading, getAllBreeds} = useCatServices();
    const [allBreeds, setAllBreeds] = useState([]);
    const [viewBreeds, setViewBreeds] = useState(null);
    const [breedsOptions, setBreedsOptions] = useState([{ value: 'All', label: 'All breeds', }]);
    const [sortBtnDisabled, setSortBtnDisabled] = useState({sort: false, reversSort: true});
    const [paginationDisabled, setPaginationDisabled] = useState({prev: true, next: true});
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);

    const breedsOptionsHandler = () =>{
        const options = allBreeds.map(breed => {
            return{
                value: breed.id,
                label: breed.name,
            };
        });
        setBreedsOptions([breedsOptions[0], ...options]);
    };

    const onChooseBreed = (option) => {
        const choosenBreed = allBreeds.find(breed => breed.id === option.value);
        if(choosenBreed){
            setViewBreeds([choosenBreed]);
        } else {
            setViewBreeds(allBreeds.slice(offset, offset + limit));
        }
    };

    const onChooseLimit = (option) => {
        setLimit(+option.value);
    };

    const onSort = () => {
        setAllBreeds(allBreeds => allBreeds = allBreeds.slice().reverse());
        setSortBtnDisabled({sort: true, reversSort: false});
    };

    const onReversSort = () => {
        setAllBreeds(allBreeds => allBreeds = allBreeds.slice().reverse());
        setSortBtnDisabled({sort: false, reversSort: true});
    };

    const onPaginationNext = () => {
        setOffset(offset => offset += limit);
    };

    const onPaginationPrev = () => {
        setOffset(offset => (offset  - limit) < 0? 0 : offset -= limit);
    };

    useEffect(() => {
        getAllBreeds()
        .then(res => {
            setAllBreeds([...res]);
        });
    }, []);

    useEffect(() => {
        setViewBreeds(allBreeds.slice(offset, offset + limit));

        if(breedsOptions.length === 1) {
            breedsOptionsHandler();
        }

        setPaginationDisabled(() => ({
            prev: !offset ? true: false,
            next: viewBreeds?.length < limit ? true : false,
        }));

    }, [allBreeds]);

    useEffect(() => {
        setViewBreeds(() => allBreeds.slice(offset, offset + limit));

        setPaginationDisabled(() => ({
            prev: !offset ? true: false,
            next: viewBreeds?.length < limit ? true : false,
        }));
    }, [limit, offset]);

    const loader = loading ? <Spinner/> : null;
    const content = !loading && viewBreeds ? <GridImageSection viewImages={viewBreeds}/> : null;

    return(
        <AppWrapper>
            <aside className="filters_section breed_page">
                <BackButton/>
                <Label/>
                <BreedsFilter 
                    breedsOptions={breedsOptions} 
                    onChooseBreed={onChooseBreed}/>
                <LimitFilter
                    onChooseLimit={onChooseLimit}/>
                <button className="sort"
                        disabled={sortBtnDisabled.sort}
                        onClick={onSort}>
                    <i className="icon_sort"></i>
                </button>
                <button className="sort_revers"
                        disabled={sortBtnDisabled.reversSort}
                        onClick={onReversSort}>
                    <i className="icon_sort_revers"></i>
                </button>
            </aside>
            {loader}
            {content}
            <Pagination 
                paginationDisabled={paginationDisabled}
                onPaginationNext={onPaginationNext}
                onPaginationPrev={onPaginationPrev}/>
        </AppWrapper>
    );
};

export default BreedsPage;