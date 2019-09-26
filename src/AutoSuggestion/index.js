import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import Theme from '../Theme'

const OnBoardingInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  box-sizing: border-box;
`
const OnBoardingInputField = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  & .react-autosuggest__container {
    position: relative;
    input {
      box-sizing: border-box;
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      line-height: 36px;
      border-radius: 4px;
      border: 1px solid ${props => props.theme.grey3};
      height: 36px;
      max-height: 36px;
      padding-inline-start: 8px;
      padding-inline-end: 8px;
      color: ${props => props.theme.grey3};
      outline: 0 none;
      &:focus {
        border: 1px solid ${props => props.theme.primary1};
        color: ${props => props.theme.black};
        box-shadow: 0 0px 1px 2px ${props => props.theme.primary1Transparent};
      }
      &:active {
        border: 1px solid ${props => props.theme.black};
        color: ${props => props.theme.black};
      }
      &:hover {
        border: 1px solid
          ${props => (props.disabled ? props.theme.grey2 : props.theme.black)};
      }
    }
  }
  & .react-autosuggest__suggestions-container--open {
    position: absolute;
    top: 44px;
    width: 100%;
    z-index: 10;
    background: ${props => props.theme.white};
    overflow: scroll;
    border-radius: 8px;
    -webkit-box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.5);
    & ul {
      padding-inline-start: 0em;
      margin-block-end: 0em;
      margin-block-start: 0em;
    }
    & ul > li {
      list-style: none;
    }
  }
`
OnBoardingInputField.defaultProps = {
  theme: Theme
}
// react-autosuggest__suggestions-container react-autosuggest__suggestions-container--open
const SuggestionContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background: ${props =>
    props.isHighlighted ? props.theme.primary1 : props.theme.white};
  height: 3em;
  padding: 1em;
`
SuggestionContainer.defaultProps = {
  theme: Theme
}
const SuggestionContainerHighlighted = styled.h1`
  font-size: 1em;
  font-weight: 600;
  line-height: 22px;
  color: ${props => (props.isHighlighted ? props.theme.white : '#4C4C4C')};
  margin: 0em;
`
SuggestionContainerHighlighted.defaultProps = {
  theme: Theme
}
const SuggestionContainerUnHighlighted = styled.h1`
  font-size: 1em;
  font-weight: 400;
  line-height: 22px;
  color: ${props => (props.isHighlighted ? props.theme.white : '#BABABA')};
  margin: 0em;
  opacity: 0.5;
`
SuggestionContainerUnHighlighted.defaultProps = {
  theme: Theme
}
const getSuggestions = (value, options) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : options.filter(
      option =>
        option.label.toLowerCase().slice(0, inputLength) === inputValue
    )
}
const getSuggestionValue = suggestion => suggestion.label

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const suggestionText = suggestion.label
  const matches = match(suggestionText, query)
  const parts = parse(suggestionText, matches)
  return (
    <SuggestionContainer isHighlighted={isHighlighted}>
      {parts.map((part, index) =>
        part.highlight ? (
          <SuggestionContainerHighlighted
            key={index}
            isHighlighted={isHighlighted}
          >
            {' '}
            {part.text}{' '}
          </SuggestionContainerHighlighted>
        ) : (
          <SuggestionContainerUnHighlighted
            key={index}
            isHighlighted={isHighlighted}
          >
            {' '}
            {part.text}{' '}
          </SuggestionContainerUnHighlighted>
        )
      )}
    </SuggestionContainer>
  )

  // return <SuggestionContainer>{suggestion.value}</SuggestionContainer>;
}
class AutoSuggestion extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      statevalue: '',
      suggestions: []
    }
  }

  componentDidMount() {
    const { value } = this.props
    this.setState({
      statevalue: value
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const { options } = this.props
    this.setState({
      suggestions: getSuggestions(value, options)
    })
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  };

  onChange = (event, { newValue }) => {
    const { name, onChange, options } = this.props
    // const value = options.filter(option)
    this.setState(
      {
        statevalue: newValue
      },
      onChange({
        target: {
          name,
          value: newValue
        }
      })
    )
  };
  render() {
    const {
      name,
      autoComplete,
      placeholder,
      onChange,
      value,
      options
    } = this.props
    const { statevalue, suggestions } = this.state

    const inputProps = {
      placeholder,
      value: statevalue,
      onChange: this.onChange
    }
    return (
      <OnBoardingInputContainer>
        <OnBoardingInputField active={statevalue !== ''}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            autoComrenderInputComponentplete={autoComplete}
          />
        </OnBoardingInputField>
      </OnBoardingInputContainer>
    )
  }
}

AutoSuggestion.propTypes = {
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })
  ).isRequired
}

export default AutoSuggestion
