import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Theme from '../Theme';

import CheckBoxOutline from '../Icons/CheckBoxOutline';
import CheckBoxFill from '../Icons/CheckBoxFill';
import UncheckFill from '../Icons/UncheckFill';

const CheckBoxContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
`;
const Input = styled.input`
  opacity: 0;
  z-index: 99;
  position: absolute;
  cursor: pointer;
`;
const Icon = styled.div`
  position: relative;
  margin-right: 8px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  text-transform: capitalize;
  ${({ disabled }) =>
    disabled
      ? css`
          color: ${props => props.theme.grey3};
        `
      : css`
          color: ${props => props.theme.black};
        `}
`;
Label.defaultProps = {
  theme: Theme,
};
function CheckBox(props) {
  const { label, selected, disabled, className, name, onChange } = props;
  return (
    <CheckBoxContainer className={className}>
      <Input
        checked={selected}
        disabled={disabled}
        onChange={onChange}
        name={name}
        type="checkbox"
      />
      <Icon>
        {selected ? (
          disabled ? (
            <UncheckFill color="#9296B3" />
          ) : (
            <CheckBoxFill color="#5F6FEE" />
          )
        ) : disabled ? (
          <CheckBoxOutline color="#9296B3" />
        ) : (
          <CheckBoxOutline />
        )}
      </Icon>
      <Label disabled={disabled}> {label} </Label>
    </CheckBoxContainer>
  );
}
CheckBox.defaultProps = {
  label: 'Checkbox',
  selected: false,
  disabled: false,
};
CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default CheckBox;
