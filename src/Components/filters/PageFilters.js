//All filters made with using "react-select".
//Documentation for this API - https://react-select.com/home;

import PropTypes from 'prop-types';
import Select from 'react-select';

const LimitFilter = (props) => {
    const {onChooseLimit, label, className, pageName} = props;
    const limitOptions = [
        { value: '5', label: 'Limit: 5', },
        { value: '10', label: 'Limit: 10', },
        { value: '15', label: 'Limit: 15', },
        { value: '20', label: 'Limit: 20', },
    ];
    return (
        <div className={`limit_filter ${className} ${pageName || ''}`}>
            {label ? <label className='filter_label' htmlFor="limit">Limit</label> : null}
            <Select instanceId='limit'
                    className='limit'
                    classNamePrefix={'limit'}
                    placeholder="Limit"
                    unstyled
                    openMenuOnFocus
                    onChange={option => onChooseLimit(option.value)}
                    defaultValue={limitOptions[0]}
                    options={limitOptions}
            />     
        </div>
    );
};

LimitFilter.propTypes = {
    label: PropTypes.bool,
    onChooseLimit: PropTypes.func,
    className: PropTypes.string, 
    pageName: PropTypes.string
};

const BreedsFilter = (props) => {
    const {onChooseBreed, breedsOptions, label, className, pageName} = props;
    return (
        <div className={`breeds_filter ${className} ${pageName || ''}`}>
            {label ? <label className='filter_label' htmlFor="breeds">Breeds</label> : null}
            <Select instanceId='breeds'
                    className='breeds'
                    classNamePrefix={'breeds'}
                    placeholder="Breeds"
                    unstyled
                    openMenuOnFocus
                    menuShouldScrollIntoView
                    onChange={(option) => onChooseBreed(option.value)}
                    defaultValue={breedsOptions[0]}
                    options={breedsOptions}
            />     
        </div>
    );
};

BreedsFilter.propTypes = {
    label: PropTypes.bool,
    onChooseBreed: PropTypes.func,
    breedsOptions: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string, 
    pageName: PropTypes.string
};

const OrderFilter = (props) => {
    const {onChooseOrder, label, className, pageName} = props;
    const orderOptions = [
        { value: 'RANDOM', label: 'Random', },
        { value: 'DESC', label: 'Desc', },
        { value: 'ASC', label: 'Asc', },
    ];

    return (
        <div className={`order_filter ${className} ${pageName || ''}`}>
            {label ? <label className='filter_label' htmlFor="order">Order</label> : null}
            <Select instanceId='order'
                    className='order'
                    classNamePrefix={'order'}
                    placeholder="Order"
                    unstyled
                    openMenuOnFocus
                    onChange={(option) => onChooseOrder(option.value)}
                    defaultValue={orderOptions[0]}
                    options={orderOptions}
            />     
        </div>
    );
};

OrderFilter.propTypes = {
    onChooseOrder: PropTypes.func,
    label: PropTypes.bool
};

const TypeFilter = (props) => {
    const {onChooseType, label, className, pageName} = props;
    const typeOptions = [
        { value: 'gif,jpg,png', label: 'All', },
        { value: 'jpg,png', label: 'Static', },
        { value: 'gif', label: 'Animated', },
    ];

    return (
        <div className={`type_filter ${className} ${pageName || ''}`}>
            {label ? <label className='filter_label' htmlFor="type">Type</label> : null}
            <Select instanceId='type'
                    className='type'
                    classNamePrefix={'type'}
                    placeholder="Type"
                    unstyled
                    openMenuOnFocus
                    onChange={(option) => onChooseType(option.value)}
                    defaultValue={typeOptions[0]}
                    options={typeOptions}
            />     
        </div>
    );
};

TypeFilter.propTypes = {
    onChooseType: PropTypes.func,
    label: PropTypes.bool,
    className: PropTypes.string, 
    pageName: PropTypes.string
};


export {LimitFilter, BreedsFilter, OrderFilter, TypeFilter};