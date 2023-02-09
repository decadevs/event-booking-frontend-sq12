import Buttons from '../Buttons/Buttons'
import InputField from '../InputField/InputField'
import React, { useState } from 'react'
import Dropdown from './DropDown'

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
      <div>
        <Buttons
          width="1000px"
          height="100px"
          onClick={() => console.log('You clicked on the circle!')}
          children="Submit"
        />
      </div>

      <InputField
        type={'email'}
        value={name}
        name="name"
        placeholder={'Email'}
        onChange={handle}
      />

      <div>
        <Dropdown
          id={''}
          name={''}
          options={options}
          title={''}
          handleChange={handleChange}
          selectedValue={selectedVal}
        />
      </div>
    </div>
  )
}
