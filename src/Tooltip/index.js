import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'
import styled from 'styled-components'
// import 'rc-tooltip/assets/bootstrap.css'
import '../styles.css'

const OverlayTooltip = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${props => props.theme.white};
  text-align: center;
`
const ToolTipChildren = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`

const ToolTip = props => {
  return (
    <Tooltip
      placement={props.placement}
      trigger={['hover']}
      overlay={<OverlayTooltip>{props.label}</OverlayTooltip>}
      arrowContent={<div style={{ display: 'none' }} />}
      destroyTooltipOnHide={true}
      transitionName='rc-tooltip-zoom'
      mouseEnterDelay={0.35}
    >
      <ToolTipChildren>{props.children}</ToolTipChildren>
    </Tooltip>
  )
}
ToolTip.defaultProps = {
  placement: 'bottom'
}

ToolTip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element
  ]).isRequired,
  placement: PropTypes.oneOf(['bottom', 'top', 'left', 'right']).isRequired,
  label: PropTypes.string.isRequired
}

export default ToolTip
