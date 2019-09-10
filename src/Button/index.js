import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../Theme'

const ButtonStyled = styled(({ className, children }) => (
  <button className={className}> {children} </button>
))`
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  line-height: 21px;
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
        ${({ disabled }) =>
    disabled
      ? css`
                background: ${props => props.theme.grey3};
                color: ${props => props.theme.white};
                cursor: not-allowed;
              `
      : css`
                &:hover {
                  background: ${props => props.theme.primary4};
                }
                &:focus {
                  background: ${props => props.theme.primary5};
                }
              `}
      `
    }
    if (props.secondary) {
      return css`
        color: ${props => props.theme.black};
        background: ${props => props.theme.white};
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
        border: 1px solid ${props => props.theme.grey2};
        ${({ disabled }) =>
    disabled
      ? css`
                background: ${props => props.theme.grey2};
                color: ${props => props.theme.grey3};
                cursor: not-allowed;
              `
      : css`
                &:hover {
                  background: ${props => props.theme.grey1};
                }
                &:focus {
                  background: ${props => props.theme.grey2};
                }
              `}
      `
    }
    if (props.tertiary) {
      return css`
        color: ${props => props.theme.black};
        background: transparent;
        box-shadow: none;
        border: none;
        ${({ disabled }) =>
    disabled
      ? css`
                background: ${props => props.theme.white};
                color: ${props => props.theme.grey3};
                cursor: not-allowed;
              `
      : css`
                &:hover {
                  background: ${props => props.theme.grey1};
                }
                &:focus {
                  background: ${props => props.theme.grey2};
                }
              `}
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
      ? css`
          padding: 4px 16px;
        `
      : css`
          padding: 8px 16px;
        `}
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
  if (props.withIcon) {
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
