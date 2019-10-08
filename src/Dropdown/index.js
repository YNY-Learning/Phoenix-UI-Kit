import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Select, { components } from 'react-select'
import DownChevron from '../Icons/DownChevron'

const StyledSelect = styled(Select)`
  width: 100%;
`
const OnBoardingInputContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  min-width: 200px;
`
const DropdownIndicator = props =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <DownChevron />
    </components.DropdownIndicator>
  )

const styles = {
  indicatorSeparator: () => {
    'none'
  },
  control: provided => ({
    ...provided,
    backgroundColor: '#FFF',
    borderColor: '#9296B3',
    background: '#FFF',
    border: '1px solid #9296B3',
    height: '36px',
    maxHeight: '36px',
    outline: '0 none',
    '&:focus': {
      border: '1px solid #5F6FEE',
      color: 'black',
      boxShadow: '0 0px 1px 2px rgba(95,111,238,0.5)'
    },
    '&:active': {
      border: '1px solid black',
      color: 'black'
    },
    '&:hover': {
      border: '1px solid black'
    }
  }),
  placeholder: provided => ({
    ...provided,
    color: '#9296B3',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px'
  }),
  singleValue: provided => ({
    ...provided,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
    marginLeft: '8px',
    marginRight: '8px'
  }),
  menuList: provided => ({
    ...provided,
    zIndex: 15
  }),
  menuPortal: provided => ({
    ...provided,
    zIndex: 15
  }),
  option: provided => ({
    ...provided,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
    color: '#000',
    backgroundColor: '#FFF',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#F2F2F5'
    }
  }),
  menu: provided => ({
    ...provided,
    zIndex: 15,
    padding: '8px',
  })
}
const Dropdown = props => {
  const {
    className,
    name,
    placeholder,
    onChange,
    onBlur,
    value,
    options
  } = props
  const selectedValue = options.find(option => option.value === value)

  return (
    <OnBoardingInputContainer className={className}>
      <StyledSelect
        components={{ DropdownIndicator }}
        value={selectedValue}
        onChange={e =>
          onChange({
            target: {
              value: e.value,
              name: name
            }
          })
        }
        options={options}
        styles={styles}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </OnBoardingInputContainer>
  )
}

Dropdown.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string
    })
  ),
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.any
}

export default Dropdown
