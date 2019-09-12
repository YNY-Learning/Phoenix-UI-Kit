import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../Theme'
import RadioOffOutline from '../Icons/RadioOffOutline'
import RadioOnFill from '../Icons/RadioOnFill'

const RadioContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
  position: relative;
`
const Input = styled.input`
  opacity: 0;
  z-index: 99;
  position: absolute;
  cursor: pointer;
`
const Icon = styled.div`
  position: relative;
  margin-right: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Label = styled.div`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  text-transform: capitalize;
  ${({ disabled }) =>
    disabled
      ? css`
          color: ${props => props.theme.grey3};
        `
      : css`
          color: ${props => props.theme.black};
        `}
`
Label.defaultProps = {
  theme: Theme
}
function Radio(props) {
  const { label, selected, disabled, className, name, onChange } = props
  return (
    <RadioContainer className={className}>
      <Input
        value={name}
        disabled={disabled}
        onChange={onChange}
        name={name}
        type='radio'
      />
      <Icon>
        {selected ? (
          disabled ? (
            <RadioOnFill color='#9296B3' />
          ) : (
            <RadioOnFill color='#5F6FEE' />
          )
        ) : disabled ? (
          <RadioOffOutline color='#9296B3' />
        ) : (
          <RadioOffOutline />
        )}
      </Icon>
      <Label disabled={disabled}> {label} </Label>
    </RadioContainer>
  )
}
Radio.defaultProps = {
  label: 'Radio',
  selected: false,
  disabled: false
}
Radio.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
export default Radio
