import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'

const MegaStyled = styled(({ className, ...props }) => (
  <h1 className={className} {...props} />
))`
  font-size: 24px;
  line-height: 36px;
  margin: 0;
  font-weight: ${props => props.theme.fontWeights[props.weight]};
  color: ${props => props.theme[props.color]};
`
MegaStyled.defaultProps = {
  theme: Theme
}

const Mega = props => {
  return (
    <MegaStyled weight={props.weight} color={props.color} {...props}>
      {props.children}
    </MegaStyled>
  )
}
Mega.defaultProps = {
  weight: 'regular',
  color: 'black'
}
Mega.propTypes = {
  weight: PropTypes.string,
  color: PropTypes.string
}
export default Mega
