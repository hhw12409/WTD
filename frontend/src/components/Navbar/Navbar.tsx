import {Center, Nav, LogoBox, Button, MyPageButton, LoginButton} from './Navbar.styles'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Navbar() {
  return (
    <Nav>
      <Center>
        <ArrowBackIosNewIcon/><span>back</span>
      </Center>
      <LogoBox>Logo</LogoBox>
      <div>
        <MyPageButton>마이페이지</MyPageButton>
        <LoginButton>로그인</LoginButton>
      </div>
    </Nav>
  );
}

export default Navbar;
