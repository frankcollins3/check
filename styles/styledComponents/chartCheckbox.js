import styled from 'styled-components';
// border: 2px solid ${props => props.theme.grey}; /* Checkbox border */
// abandoning ship at 1:30pm for speed. 

const TestHeader = styled.h1`
    color: coral;
    font-family: cursive;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 5px solid hotpink;
`;

const StyledLabel = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 25px; /* Adjust as needed */
  cursor: pointer;
  margin: 0 2.5px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 20px; /* Adjust as needed */
    height: 20px; /* Adjust as needed */
    border: 2px solid orange;
    background-color: orange; /* Checkbox background color */
  }

  &:after {
    content: '\2713'; /* Unicode checkmark character */
    font-size: 16px; /* Adjust as needed */
    color: ${props => props.theme.grey}; /* Color of the checkmark */
    position: absolute;
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%);
    opacity: 0; /* Hide the checkmark by default */'
    border: 5px solid rebeccapurple;
  }
`;

const CheckboxWrapper = styled.div`
  ${HiddenCheckbox}:checked + ${StyledLabel}:before {
    background-color: #007bff; /* Change to desired checked color */
  }

  ${HiddenCheckbox}:checked + ${StyledLabel}:after {
    opacity: 1;
  }
`;

const SingleMultiChartViewBtn = styled.button`
  position: relative;
  top: 15px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.grey};
  color: ${props => props.theme.grey};
`;

export { HiddenCheckbox, StyledLabel, CheckboxWrapper, SingleMultiChartViewBtn, TestHeader2 };