import React from 'react'
interface Props {
  id: string
  name: string
  options: Array<{ label: string; value: any }>
  title: string
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectedValue: any
  style?: React.CSSProperties
}
const Dropdown = ({
  id,
  name,
  options,
  title,
  handleChange,
  selectedValue,
  style,
}: Props) => (
  <div style={style}>
    {' '}
    <p>{title}</p>{' '}
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {' '}
      <select  id={id} name={name} onChange={handleChange} value={selectedValue}>
     
        {' '}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {/* {' '} */}
            {option.label}
          </option>
        ))}
      </select>{' '}
  
    </div>{' '}
  </div>
)
export default Dropdown
