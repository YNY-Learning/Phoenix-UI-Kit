import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Line } from 'rc-progress'
import secToMin from '../utils/time'
const TimerContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  width: auto;
  height: 24px;
  max-height: 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`
const IconContainer = styled.div`
  width: auto;
  margin-right: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`
const Time = styled.div`
  margin-left: 8px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: black;
`

const ProgressBar = props => {
  const percentage = (props.currentTime / props.duration) * 100
  return (
    <TimerContainer className={props.className}>
      <IconContainer>{props.IconComponent}</IconContainer>
      <Line
        style={{
          width: '100%',
          margin: 'auto'
        }}
        percent={percentage}
        strokeWidth='5'
        strokeColor={percentage === 0 ? 'transparent' : '#5F6FEE'}
        trailWidth='5'
        trailColor='#E8E8E8'
      />
      <Time> {secToMin(props.duration)} </Time>
    </TimerContainer>
  )
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  IconComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
}

export default ProgressBar
