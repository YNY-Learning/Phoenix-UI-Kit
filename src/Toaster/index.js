import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'
import InformationOutline from '../Icons/InformationOutline'
import CloseFill from '../Icons/CloseFill'
import CheckmarkOutline from '../Icons/CheckmarkOutline'
import CircleCloseOutline from '../Icons/CircleCloseOutline'
import AlertCircleOutline from '../Icons/AlertCircleOutline'
import Button from '../Button'

const ToasterContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
  min-height: 90px;
  width: 440px;
  min-width: 440px;
  padding: 16px;
  box-shadow: 0px 2px 15px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 4px;
`
const Left = styled.div`
  flex-basis: 74px;
  width: 74px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Right = styled.div`
  width: 64px;
  flex-basis: 48px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
`
const Center = styled.div`
  width: calc(100% - 122px);
  flex-basis: calc(100% - 122px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`
const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: ${props => props.theme.black};
  width: 100%;
  margin: 0;
  margin-bottom: 8px;
`
Title.defaultProps = {
  theme: Theme
}
const Body = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${props => props.theme.black};
  width: 100%;
  margin: 0;
`
Body.defaultProps = {
  theme: Theme
}
const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: ${props => {
    switch (props.type) {
      case 'info':
        return props.theme.primary2
      case 'warning':
        return props.theme.yellow1
      case 'error':
        return props.theme.red1
      case 'success':
        return props.theme.green1
    }
  }};
`
IconContainer.defaultProps = {
  theme: Theme
}
const CloseContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const ActionContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
const Toaster = props => {
  return (
    <ToasterContainer {...props}>
      <Left>
        <IconContainer type={props.type}>
          {props.type === 'info' && <InformationOutline />}
          {props.type === 'warning' && <AlertCircleOutline />}
          {props.type === 'success' && <CheckmarkOutline />}
          {props.type === 'error' && <CircleCloseOutline />}
        </IconContainer>
      </Left>
      <Center>
        <Title> {props.title} </Title>
        <Body> {props.body} </Body>
      </Center>
      <Right>
        <CloseContainer onClick={props.closeAction}>
          <CloseFill />
        </CloseContainer>
      </Right>
      {props.withAction && (
        <ActionContainer>
          <Button primary small onClick={props.action}>
            {props.actionTitle}
          </Button>
        </ActionContainer>
      )}
    </ToasterContainer>
  )
}

Toaster.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  withAction: PropTypes.bool,
  actionTitle: PropTypes.string,
  action: PropTypes.func,
  closeAction: PropTypes.func
}

export default Toaster
