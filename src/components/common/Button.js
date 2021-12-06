import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const largestyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      font-size: 1.5em;
      border-radius: 5px;
    `;
  } else {
    return css`
      padding: 8px;
      font-size: 1em;
      border-radius: 4px;
    `;
  }
};

const Button = styled.button`
  color: white;
  background: ${(p) =>
    p.secondary ? p.theme.primaryColor : p.theme.secondaryColor};
  font-weight: bold;
  ${largestyles}
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

Button.propTypes = {
  large: PropTypes.bool,
  secondary: PropTypes.bool,
};

export { Button };
