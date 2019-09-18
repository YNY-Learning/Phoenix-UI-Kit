import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../Theme'
import CheckRound from '../Icons/CheckRound'
import ErrorRound from '../Icons/ErrorRound'

const InputContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  width: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
`
const IconContainer = styled.div`
  width: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-left: -24px;
`

const StyledInput = styled(
  ({
    className,
    name,
    value,
    autoComplete,
    placeholder,
    onChange,
    onBlur,
    disabled
  }) => (
    <input
      className={className}
      value={value}
      name={name}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
    />
  )
)`
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.grey3};
  height: 36px;
  max-height: 36px;
  padding-inline-start: 8px;
  padding-inline-end: 8px;
  color: ${props => props.theme.grey3};
  outline: 0 none;
  &:focus {
    border: 1px solid ${props => props.theme.primary1};
    color: ${props => props.theme.black};
    box-shadow: 0 0px 1px 2px ${props => props.theme.primary1Transparent};
  }
  &:active {
    border: 1px solid ${props => props.theme.black};
    color: ${props => props.theme.black};
  }
  &:hover {
    border: 1px solid
      ${props => (props.disabled ? props.theme.grey2 : props.theme.black)};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background: ${props => props.theme.grey2};
      border: 1px solid ${props => props.theme.grey2};
      color: ${props => props.theme.grey3};
    `}
  ${({ inputState }) =>
    inputState === 'error' &&
    css`
      border: 1px solid ${props => props.theme.red1};
      color: ${props => props.theme.red1};
      &::placeholder {
        color: ${props => props.theme.red1};
      }
    `}
  ${({ inputState }) =>
    inputState === 'success' &&
    css`
      border: 1px solid ${props => props.theme.black};
      color: ${props => props.theme.black};
      &::placeholder {
        color: ${props => props.theme.black};
      }
    `}
`
StyledInput.defaultProps = { theme: Theme }
const Input = props => {
  return (
    <InputContainer className={props.containerClassName}>
      <StyledInput {...props} />

      {!!props.inputState && props.inputState === 'success' && (
        <IconContainer>
          <CheckRound width='18px' height='18px' color='#56D68B' />
        </IconContainer>
      )}
      {!!props.inputState && props.inputState === 'error' && (
        <IconContainer>
          <ErrorRound width='18px' height='18px' color='#EF6F6C' />
        </IconContainer>
      )}
    </InputContainer>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  inputState: PropTypes.oneOf([undefined, 'success', 'error']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.any,
  className: PropTypes.string,
  containerClassName: PropTypes.string
}

export default Input
