import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../Theme'
import ToolTip from '../Tooltip'

const NavbarContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  width: 80px;
  height: auto;
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 24px 8px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transition: all 350ms ease-in-out;
  ${({ dark }) =>
    dark &&
    css`
      background: ${props => props.theme.primary5};
    `}
  ${({ light }) =>
    light &&
    css`
      background: ${props => props.theme.white};
    `}
`
NavbarContainer.defaultProps = {
  theme: Theme
}
const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 128px;
`
const ItemsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`
const ItemContainer = styled.a`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
`
ItemContainer.defaultProps = {
  theme: Theme
}
const Navbar = props => {
  return (
    <NavbarContainer {...props}>
      <LogoContainer>{props.logo}</LogoContainer>
      <ItemsContainer>
        {props.navItems.map(item => {
          if (item.hasTooltip) {
            return (
              <ToolTip
                label={item.toolTipLabel}
                placement='right'
                key={item.link}
              >
                <ItemContainer href={item.link}>{item.logo}</ItemContainer>
              </ToolTip>
            )
          }
          return (
            <ItemContainer key={item.link} href={item.link}>
              {item.logo}
            </ItemContainer>
          )
        })}
      </ItemsContainer>
    </NavbarContainer>
  )
}

Navbar.propTypes = {
  dark: PropTypes.bool,
  light: PropTypes.bool,
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
      link: PropTypes.string.isRequired,
      hasTooltip: PropTypes.bool,
      toolTipLabel: PropTypes.string
    })
  ),
  className: PropTypes.string
}

export default Navbar
