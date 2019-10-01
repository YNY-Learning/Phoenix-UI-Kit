import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Line } from 'rc-progress'
import secToMin from '../utils/time'
const TimerContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  width: auto;
  height: 21px;
  max-height: 21px;
  padding: 0.2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`
const IconContainer = styled.div`
  width: auto;
  margin-right: 8px;
`
const Time = styled.div`
  margin-left: 8px;
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
