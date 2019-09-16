import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'

const Square = styled.div`
  min-width: 12px;
  min-height: 12px;
  width: 12px;
  height: 12px;
  margin: 0;
  border: 1px solid
    ${props => (props.active ? props.theme.primary1 : props.theme.grey2)};
  background-color: ${props =>
    props.active ? props.theme.primary1 : props.theme.white};
  margin-right: 2px;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
  box-sizing: border-box;
`
Square.defaultProps = {
  theme: Theme
}
const SquareRatingContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 82px;
  height: 12px;
  margin: 8px 0px;
`
const LevelContainer = styled.div`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: ${props => props.theme.black};
  margin-left: 6px;
`
LevelContainer.defaultProps = {
  theme: Theme
}

const SquareRating = props => {
  return (
    <SquareRatingContainer>
      {props.levels.map((level, index) => {
        return <Square key={index} active={index <= props.ranking} />
      })}
      <LevelContainer> {props.levels[props.ranking]} </LevelContainer>
    </SquareRatingContainer>
  )
}

SquareRating.propTypes = {
  levels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element])
  ).isRequired,
  ranking: PropTypes.number.isRequired
}

export default SquareRating
