import styled from "styled-components";
import { FONT } from "../../constants/font"
import { SIZE } from "../../constants/size"

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled(Center)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: var(--margin-size-base);
`;

const LogoBox = styled(Center)`
  padding: var(--padding-size-base) var(--padding-size-large);
  background: var(--color-logo-bg);
  font-size: var(--font-size-small);
`;

const Button = styled.button`
  padding: ${SIZE.PADDING_SIZE.SMALL} ${SIZE.PADDING_SIZE.BASE};
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
    font-weight: ${FONT.FONT_WEIGHT.BOLD};
  }
`

const MyPageButton = styled(Button)`
  margin-right: ${SIZE.MARGIN_SIZE.BASE};
`

const LoginButton = styled(Button)`
`

export {Center, Nav, LogoBox, Button, MyPageButton, LoginButton}