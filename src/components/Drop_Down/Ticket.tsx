import Buttons from '../Buttons/Buttons'
// import InputField from '../InputField/InputField'
import React, { useState } from 'react'

import { Box, FormControl, InputLabel, SelectChangeEvent } from '@mui/material'
import { width } from '@mui/system'
import styled from "styled-components"
import Dropdown from './DropDown'
// import Dropdown from './DropDown'




export default function Ticket() {
    const [inputValue, setInputValue] = useState({ name: '' })
    const { name } = inputValue

    const handle = (e: any) => {
        const { name, value } = e.target
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }))
        console.log(inputValue)
    }

    const [selectedVal, setSelectedVal] = useState('')

    const handleChange = (e: any) => {
        setSelectedVal(e.target.value)
        console.log(selectedVal)
    }

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue((event.target as HTMLInputElement).value);
    //   };

    // const [selected, setSelected] = React.useState(false);

    // const handleChange = (event: SelectChangeEvent) => {
    //     // onChange(event);
    //     setSelected(true);
    //     console.log(setSelected)

    // };

    // const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setSelectedOptions(event.target.value as string[]);
    //     console.log(setSelectedOptions)
    // };
    // const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     const value = event.target.value;

    //     if (typeof value === 'string') {
    //         setSelectedOptions([value]);
    //     } else if (Array.isArray(value)) {
    //         setSelectedOptions(value as string[]);
    //     }
    // };



    const options = [
        { label: 'food & Drinks', value: 'food' },
        { label: 'Firm,Media & Entertainment', value: 'Media' },
        { label: 'Event & Lifestyle', value: 'Event' },
        { label: 'Special Interest', value: 'Special' },
        { label: 'Religious & Spirituality', value: 'Religious' },
        { label: 'Technology', value: 'Technology' },
        { label: 'Government & Politics', value: 'Government ' },
    ]

    return (
        <div>


            <Buttons
                width="200px"
                height="70px"
                onClick={() => console.log('You clicked on the circle!')}
                content={"Load More Events"}
                styleType={'secondary'}

            />


            {/* <InputField
                style={{ width: "200px", height: "300px" }}

                type={'text'}
                value={name}
                name="name"
                label='email'
                placeholder={'Email'}
                onChange={handle} /> */}

            {/* <InputField
                name='name'
                type={'text'}
                label={'email'}
                value={name}
                id={''}
                onChange={handle}
                boxSx={{ width: 200, color: '#252D42', }}
            /> */}


            <p> Location</p>

            <Dropdown
                label={'location'}
                value={selectedVal}
                options={options}
                onChange={handleChange}
                // boxSx={{ width: 2000 }}
                formSx={{ minWidth: 300 }}
            />

            {/* <Dropdown
                id="my-dropdown"
                label="Select Options"
                options={options}
                value={setSelected}
                onChange={handleChange}
                title={''}
            id={''}
            title={''}
            label={''}
            options={[]}
            onChange={handleChange}
            value={undefined}
            /> */}

            {/* <Dropdown
                id={''}
                title={''}
                label={'Categrory'}
                options={options}
                onChange={handleChange}
                value={setSelected}
                boxSx={{ width: 300, }}
                type={'checkbox'}
            /> */}
            {/* <Dropdown
                id={''}
                title={''}
                label={'location'}
                options={options}
                onChange={handleChange}
                value={''}
                boxSx={{ width: 150 }}

            // <FormControl sx={{ m: 1, width: 300 }}>
            /> */}


        </div >
    )
}