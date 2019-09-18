import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../Theme'
import StarFill from '../Icons/StarFill'

const StyledStar = styled(props => (
  <StarFill
    color={props.active ? props.theme.primary1 : props.theme.grey2}
    width='12px'
    height='12px'
  />
))`
  &:hover {
    color: ${props => props.theme.yellow1};
  }
`

StyledStar.defaultProps = {
  theme: Theme
}

const Square = styled(props => (
  <div
    className={props.className}
    onClick={e =>
      props.onChange({
        e: {
          target: {
            name: props.name,
            value: props.value
          }
        }
      })
    }
  >
    <StyledStar active={props.active} />
  </div>
))`
  margin-right: 2px;
  box-sizing: border-box;
  cursor: pointer;
`
Square.defaultProps = {
  theme: Theme
}
const StarRatingContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: 12px;
  margin: 8px 0px;
`
const LevelContainer = styled.div`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: ${props => props.theme.black};
  margin-left: 22px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`
LevelContainer.defaultProps = {
  theme: Theme
}

const StarRating = props => {
  return (
    <StarRatingContainer>
      {props.options.map((option, index) => {
        return (
          <Square
            key={index}
            active={index <= props.value}
            name={props.name}
            value={option}
            onChange={props.onChange}
          />
        )
      })}
      <LevelContainer> {props.options[props.value]} </LevelContainer>
    </StarRatingContainer>
  )
}

StarRating.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default StarRating
