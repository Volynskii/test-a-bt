import React,{useState} from 'react';
import data from "../mocks/data";

const Select = () => {

    const [selectValue,setSelectValue] = useState(null??'value2')
    console.log('select value',selectValue)
    const handleChangeSelect = (select) => {
        setSelectValue(select);
    };
    return (
        <div>

        </div>
    );
};

export default Select;
