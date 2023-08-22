//All filters made with using "react-select".
//Documentation for this API - https://react-select.com/home;

import Select from 'react-select'

import "./pageFilters.scss";

const limitOptions = [
    { value: '5', label: 'Limit: 5', },
    { value: '10', label: 'Limit: 10', },
    { value: '15', label: 'Limit: 15', },
    { value: '20', label: 'Limit: 20', },
]

const breedsOptions = [
    { value: 'All', label: 'All breeds', },
]

const orderOptions = [
    { value: 'Random', label: 'Random', },
    { value: 'Desc', label: 'Desc', },
    { value: 'Asc', label: 'Asc', },
]

const typeOptions = [
    { value: 'All', label: 'All', },
    { value: 'Static', label: 'Static', },
    { value: 'Animated', label: 'Animated', },
]

const LimitFilter = (props) => {
    const {label} = props;

    return (
        <>
            {label ? <label htmlFor="limit">Limit</label> : null}
            <Select id='limit_filter'
                    className='limit'
                    classNamePrefix={'limit'}
                    placeholder="Limit"
                    unstyled
                    openMenuOnFocus
                    // menuIsOpen
                    defaultValue={limitOptions[0]}
                    options={limitOptions}
            />     
        </>
    );
}

const BreedsFilter = (props) => {
    const {label} = props;

    return (
        <>
            {label ? <label htmlFor="breeds">breeds</label> : null}
            <Select id='breeds_filter'
                    className='breeds'
                    classNamePrefix={'breeds'}
                    placeholder="Breeds"
                    unstyled
                    openMenuOnFocus
                    // menuIsOpen
                    defaultValue={breedsOptions[0]}
                    options={breedsOptions}
            />     
        </>
    );
}

const OrderFilter = (props) => {
    const {label} = props;

    return (
        <>
            {label ? <label htmlFor="order">order</label> : null}
            <Select id='order_filter'
                    className='order'
                    classNamePrefix={'order'}
                    placeholder="Order"
                    unstyled
                    openMenuOnFocus
                    // menuIsOpen
                    defaultValue={orderOptions[0]}
                    options={orderOptions}
            />     
        </>
    );
}

const TypeFilter = (props) => {
    const {label} = props;

    return (
        <>
            {label ? <label htmlFor="type">type</label> : null}
            <Select id='type_filter'
                    className='type'
                    classNamePrefix={'type'}
                    placeholder="Type"
                    unstyled
                    openMenuOnFocus
                    // menuIsOpen
                    defaultValue={typeOptions[0]}
                    options={typeOptions}
            />     
        </>
    );
}

export {LimitFilter, BreedsFilter, OrderFilter, TypeFilter};