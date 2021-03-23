import React from 'react';
import './picker.css';

const MultiSelectPicker = (props) => {
    const [ searchInput, setSearchInput ] = React.useState('');
    const [ selectContent, setSelectContent ] =React.useState(props.options);
    console.log(props.options);
    return (
        <div id='picker-container'>
            <input className='picker_input' type='text' placeholder='Search...'/>
                <ul className='select-body'>
                    {selectContent.map((element, index) => {
                        return (
                            <li key={index}>{element}</li>
                        )
                    })}
                </ul>
        </div>
    )
};

export default MultiSelectPicker;