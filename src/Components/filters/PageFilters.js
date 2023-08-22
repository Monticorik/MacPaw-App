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
        <div id="limit_filter">
            {label ? <label htmlFor="limit">Limit</label> : null}
            <Select id='limit'
                    className='limit'
                    classNamePrefix={'limit'}
                    placeholder="Limit"
                    unstyled
                    openMenuOnFocus
                    // menuIsOpen
                    defaultValue={limitOptions[0]}
                    options={limitOptions}
            />     
        </div>
    );
}

const BreedsFilter = (props) => {
    const {label} = props;

    return (
        <div id='breeds_filter'>
            {label ? <label htmlFor="breeds">Breeds</label> : null}
            <Select id='breeds'
                    className='breeds'
                    classNamePrefix={'breeds'}
                    placeholder="Breeds"
                    unstyled
                    openMenuOnFocus
                    // menuIsOpen
                    defaultValue={breedsOptions[0]}
                    options={breedsOptions}
            />     
        </div>
    );
}

const OrderFilter = (props) => {
    const {label} = props;

    return (
        <div id='order_filter'>
            {label ? <label htmlFor="order">Order</label> : null}
            <Select id='order'
                    className='order'
                    classNamePrefix={'order'}
                    placeholder="Order"
                    unstyled
                    openMenuOnFocus
                    // menuIsOpen
                    defaultValue={orderOptions[0]}
                    options={orderOptions}
            />     
        </div>
    );
}

const TypeFilter = (props) => {
    const {label} = props;

    return (
        <div id="type_filter">
            {label ? <label htmlFor="type">Type</label> : null}
            <Select id='type'
                    className='type'
                    classNamePrefix={'type'}
                    placeholder="Type"
                    unstyled
                    openMenuOnFocus
                    // menuIsOpen
                    defaultValue={typeOptions[0]}
                    options={typeOptions}
            />     
        </div>
    );
}

export {LimitFilter, BreedsFilter, OrderFilter, TypeFilter};