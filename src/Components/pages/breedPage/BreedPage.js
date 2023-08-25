import { useState, useEffect, useRef } from "react";

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

    //option and images
    const [allBreeds, setAllBreeds] = useState([]);
    const [viewBreeds, setViewBreeds] = useState([]);
    const [breedsOptions, setBreedsOptions] = useState([{ value: '', label: 'All breeds', }]);

    //filters
    const limit = useRef(5);
    const sort = useRef(false);
    const reversSort = useRef(true);

    //pagination
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(true);
    const offset = useRef(0);

    const onSetViewImages = () => {
        const showImageLength = allBreeds.slice((offset.current), (offset.current + limit.current)).length;
        showImageLength < limit ? setNextDisabled(true) : setNextDisabled(false);
        offset.current === 0 ? setPrevDisabled(true) : setPrevDisabled(false);

        setViewBreeds(allBreeds.slice((offset.current), (offset.current + limit.current)));
    };

    const onChooseBreed = (option) => {
        const choosenBreed = allBreeds.find(breed => breed.id === option);
        if(choosenBreed){
            setViewBreeds([choosenBreed]);
            setNextDisabled(true);
            setPrevDisabled(true);
        } else {
            onSetViewImages();
        }
    };

    const onChooseLimit = (option) => {
        limit.current = +option;
        onSetViewImages();
    };

    const onSort = () => {
        sort.current = true;
        reversSort.current = false;

        setAllBreeds(allBreeds => allBreeds = allBreeds.slice().reverse());
    };

    const onReversSort = () => {
        sort.current = false;
        reversSort.current = true;

        setAllBreeds(allBreeds => allBreeds = allBreeds.slice().reverse());
    };

    const onPaginationNext = () => {
        offset.current += limit.current;

        onSetViewImages();
    };

    const onPaginationPrev = () => {
        offset.current - limit.current < 0 ? offset.current = 0 : offset.current -= limit.current;

        onSetViewImages();
    };

    useEffect(() => {
        getAllBreeds()
        .then(res => {
            setAllBreeds([...res]);
        });
    }, []);

    useEffect(() => {
        setViewBreeds(allBreeds.slice(offset.current, offset.current + limit.current));

        const options = allBreeds.map(breed => {
            return{
                value: breed.id,
                label: breed.name,
        };
        });
        setBreedsOptions([breedsOptions[0], ...options]);

        setNextDisabled(false);

    }, [allBreeds]);

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
                        disabled={sort.current}
                        onClick={onSort}>
                    <i className="icon_sort"></i>
                </button>
                <button className="sort_revers"
                        disabled={reversSort.current}
                        onClick={onReversSort}>
                    <i className="icon_sort_revers"></i>
                </button>
            </aside>
            {loader}
            {content}
            <Pagination 
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
                onPaginationNext={onPaginationNext}
                onPaginationPrev={onPaginationPrev}/>
        </AppWrapper>
    );
};

export default BreedsPage;