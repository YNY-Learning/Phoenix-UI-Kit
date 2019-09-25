import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import fr from 'date-fns/locale/fr'
import BackChevron from '../Icons/BackChevron'
import NextChevron from '../Icons/NextChevron'
import Agenda from '../Icons/Agenda'
import DownChevron from '../Icons/DownChevron'
import Theme from '../Theme'
registerLocale('fr', fr)

const Months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Aout',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
]
const CalendarPickerContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`
const CalendarHeader = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  background: ${props => props.theme.white};
`
CalendarHeader.defaultProps = {
  theme: Theme
}
const BackContainer = styled.div`
  flex-basis: 16px;
  position: relative;
  margin-left: 1em;
  cursor: pointer;
`
const NextContainer = styled.div`
  flex-basis: 16px;
  position: relative;
  margin-right: 1em;
  cursor: pointer;
`
const DateContainer = styled.h1`
  flex-basis: calc(100% - 32px - 2em);
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: ${props => props.theme.black};
`
DateContainer.defaultProps = {
  theme: Theme
}
const CalendarInput = styled.input`
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
`
CalendarInput.defaultProps = {
  theme: Theme
}
const CalendarInputContainer = styled.div`
  height: 36px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`
const AgendaIconContainer = styled.div`
  margin-left: -24px;
  box-sizing: border-box;
`

const DayContainer = styled.h1`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: ${props => (props.disabled ? '#E8E8E8' : '#333333')};
`
DayContainer.defaultProps = {
  theme: Theme
}
class CustomInput extends React.PureComponent {
  render() {
    const { focused, setFocused } = this.props
    return (
      <CalendarInputContainer
        onFocus={this.onInputFocus}
        onBlur={this.onInputBlur}
      >
        <CalendarInput
          onClick={this.props.onClick}
          value={this.props.value ? this.props.value : this.props.placeholder}
          onChange={e => console.log(e)}
          onFocus={e => setFocused(true)}
          onBlur={e => setFocused(false)}
        />
        <AgendaIconContainer>
          <Agenda
            width='16px'
            height='16px'
            color={focused ? '#000' : '#9296B3'}
          />
        </AgendaIconContainer>
      </CalendarInputContainer>
    )
  }
}
CustomInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string
}

class CalendarPicker extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
  }
  handleChange = date => {
    const { onChange, name } = this.props
    onChange({
      target: {
        name,
        value: date
      }
    })
  };

  renderDayContents = (day, e) => (
    <DayContainer
      disabled={e < new Date(new Date().setDate(new Date().getDate() - 1))}
    >
      {day}
    </DayContainer>
  );
  setFocus = state => this.setState({ focused: state });

  render() {
    const { label, value } = this.props
    const { focused } = this.state
    return (
      <CalendarPickerContainer>
        <DatePicker
          dateFormat='yyyy/MM/dd'
          selected={value}
          onChange={this.handleChange}
          locale='fr'
          minDate={new Date(new Date().setDate(new Date().getDate() - 1))}
          showDisabledMonthNavigation
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled
          }) => (
            <CalendarHeader>
              <BackContainer onClick={decreaseMonth}>
                <BackChevron width='5px' height='10px' />
              </BackContainer>
              <DateContainer>
                {Months[date.getMonth()]} {date.getFullYear()}
              </DateContainer>
              <NextContainer onClick={increaseMonth}>
                <NextChevron width='5px' height='10px' />
              </NextContainer>
            </CalendarHeader>
          )}
          customInput={
            <CustomInput focused={focused} setFocused={this.setFocus} />
          }
          renderDayContents={this.renderDayContents}
          placeholderText='Sélectionnez une date'
        />
      </CalendarPickerContainer>
    )
  }
}

CalendarPicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date)
}

export default CalendarPicker
