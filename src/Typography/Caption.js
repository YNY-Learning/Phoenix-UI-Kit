import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'

const CaptionStyled = styled(({ className, ...props }) => (
  <h6 className={className} {...props} />
))`
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  font-weight: ${props => props.theme.fontWeights[props.weight]};
  color: ${props => props.theme[props.color]};
`
CaptionStyled.defaultProps = {
  theme: Theme
}

function Caption(props) {
  return (
    <CaptionStyled weight={props.weight} color={props.color} {...props}>
      {props.children}
    </CaptionStyled>
  )
}
Caption.defaultProps = {
  weight: 'regular',
  color: 'black'
}
Caption.propTypes = {
  weight: PropTypes.string,
  color: PropTypes.string
}
export default Caption
