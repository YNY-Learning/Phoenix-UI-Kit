import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../Theme'

const CardContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  min-height: 80px;
  width: 100%;
  padding: 16px;
  box-shadow: 0px 2px 15px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 4px;
  position: relative;
  ${({ selected }) =>
    selected
      ? css`
              &:before {
    display: block;
    position: absolute;
    left: 0;
    width: 2px;
    height: 100%;
    content: '';
    background: ${props => props.theme.primary1};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    //border-left: solid 2px ${props => props.theme.primary1};
    transform: scaleY(1);
    transition: transform 350ms ease-in-out;
  }
        `
      : css`
          &:before {
    display: block;
    position: absolute;
    left: 0;
    width: 2px;
    height: 100%;
    content: '';
    background: ${props => props.theme.primary1};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    //border-left: solid 2px ${props => props.theme.primary1};
    transform: scaleY(0);
    transition: transform 350ms ease-in-out;
  }
  :hover:before {
    transform: scaleY(1);
  }
        `}
`
CardContainer.defaultProps = {
  theme: Theme
}
const LeftComponentContainer = styled(({ className, component }) => (
  <div className={className}>{component}</div>
))`
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`
const CenterComponentContainer = styled(({ className, component }) => (
  <div className={className}>{component}</div>
))`
  width: ${props =>
    props.hasRightComponent ? 'calc(100% - 48px - 64px)' : 'calc(100% - 48px)'};
  height: 48px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 0px 0px 16px;
`
const RightComponentContainer = styled(({ className, component }) => (
  <div className={className}>{component}</div>
))`
  width: 64px;
  height: 48px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const Card = props => {
  return (
    <CardContainer {...props}>
      <LeftComponentContainer
        className={props.leftClassName}
        component={props.leftComponent}
      />
      <CenterComponentContainer
        hasRightComponent={!!props.rightComponent}
        className={props.centerClassName}
        component={props.centerComponent}
      />
      {!!props.rightComponent && (
        <RightComponentContainer
          className={props.rightClassName}
          component={props.rightComponent}
        />
      )}
    </CardContainer>
  )
}

Card.propTypes = {
  leftComponent: PropTypes.element.isRequired,
  centerComponent: PropTypes.element.isRequired,
  rightComponent: PropTypes.element,
  className: PropTypes.string,
  leftClassName: PropTypes.string,
  centerClassName: PropTypes.string,
  rightClassName: PropTypes.string,
  selected: PropTypes.bool
}

export default Card
