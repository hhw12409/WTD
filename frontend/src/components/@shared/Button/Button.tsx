import styled from '@emotion/styled';

const Button = styled.button<React.CSSProperties>`
  border: none;
  padding: 10px;
  ${({ fontWeight }) => `font-weight:${fontWeight}`};
  ${({ color }) => `color:${color}`};
  ${({ backgroundColor }) => `background-color:${backgroundColor}`};
  ${({ borderRadius }) => `border-radius:${borderRadius}`};
  ${({ padding }) => `padding:${padding}`};
  ${({ margin }) => `margin: ${margin}`};
  ${({ cursor }) => `cursor: ${cursor}`};
`;

export default Button;
