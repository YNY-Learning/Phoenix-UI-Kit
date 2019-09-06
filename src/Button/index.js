import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../Theme'

const ButtonStyled = styled(({ className, children }) => (
  <button className={className}> {children} </button>
))`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  ${props => {
    if (props.primary) {
      return css`
        color: ${props => props.theme.white};
        background: ${props => props.theme.primary1};
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
        border: none;
      `
    }
    if (props.secondary) {
      return css`
        color: ${props => props.theme.black};
        background: ${props => props.theme.white};
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
        border: 1px solid ${props => props.theme.grey2};
      `
    }
    if (props.tertiary) {
      return css`
        color: ${props => props.theme.black};
        background: transparent;
        box-shadow: none;
        border: none;
      `
    } else {
      return css`
        color: ${props => props.theme.white};
        background: ${props => props.theme.primary1};
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
        border: none;
      `
    }
  }}

  ${({ small }) =>
    small
      ? `padding: 4px 16px
  `
      : `padding: 8px 16px`}
`
ButtonStyled.defaultProps = {
  theme: Theme
}
const IconContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`
const TextContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: inherit;
  background: transparent;
`

function Button(props) {
  console.log(props.buttonIcon)
  if (props.withIcon) {
    console.log(typeof props.children)
    console.log(props.children)

    return (
      <ButtonStyled {...props}>
        {' '}
        <IconContainer>{props.buttonIcon}</IconContainer>
        <TextContainer>{props.children}</TextContainer>{' '}
      </ButtonStyled>
    )
  }
  return <ButtonStyled {...props}> {props.children} </ButtonStyled>
}
Button.propTypes = {
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  small: PropTypes.bool,
  withIcon: PropTypes.bool,
  buttonIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element
  ]).isRequired
}

export default Button
