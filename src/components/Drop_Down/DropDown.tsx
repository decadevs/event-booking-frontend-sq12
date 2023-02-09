import React from 'react'
interface Props {
  id: string
  name: string
  options: Array<{ label: string; value: any }>
  title: string
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  selectedValue: any
}
const Dropdown = ({
  id,
  name,
  options,
  title,
  handleChange,
  selectedValue,
}: Props) => (
  <div>
    {' '}
    <h1>{title}</h1>{' '}
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {' '}
      <select id={id} name={name} onChange={handleChange} value={selectedValue}>
        {' '}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {' '}
            {option.label}
          </option>
        ))}
      </select>{' '}
      <button>Button</button>{' '}
    </div>{' '}
  </div>
)
export default Dropdown
