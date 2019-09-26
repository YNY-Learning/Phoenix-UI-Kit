import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'

const BodyStyled = styled(({ className, ...props }) => (
  <h5 className={className} {...props} />
))`
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  font-weight: ${props => props.theme.fontWeights[props.weight]};
  color: ${props => props.theme[props.color]};
`
BodyStyled.defaultProps = {
  theme: Theme
}

function Body(props) {
  return (
    <BodyStyled weight={props.weight} color={props.color} {...props}>
      {props.children}
    </BodyStyled>
  )
}
Body.defaultProps = {
  weight: 'regular',
  color: 'black'
}
Body.propTypes = {
  weight: PropTypes.oneOf(['regular', 'semibold']),
  color: PropTypes.oneOf([
    'primary5',
    'primary4',
    'primary1',
    'primary2',
    'primary3',
    'primary1Transparent',
    'primaryTransparent',
    'black',
    'grey4',
    'grey3',
    'grey2',
    'grey1',
    'white',
    'green1',
    'yellow1',
    'red1'
  ])
}
export default Body
