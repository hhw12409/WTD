import styled from "styled-components";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled(Center)`
  width: 100%;
  margin-top: var(--margin-size-base);
`;

const LogoBox = styled(Center)`
  padding: var(--padding-size-base) var(--padding-size-large);
  background: var(--color-logo-bg);
  font-size: var(--font-size-small);
`;

function Navbar() {
  return (
    <Nav>
      <LogoBox>Logo</LogoBox>
    </Nav>
  );
}

export default Navbar;
