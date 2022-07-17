import { Nav, MyPageButton, LoginButton } from './Navbar.styles';
import GoBackButton from '../@shared/GoBackButton/GoBackButton';
import { Link } from 'react-router-dom';
import PATH from '@constants/path';

function Navbar() {
  return (
    <Nav>
      <GoBackButton></GoBackButton>
      <div>
        <Link to={PATH.MYPAGE}>
          <MyPageButton>마이페이지</MyPageButton>
        </Link>
        <Link to={PATH.LOGIN}>
          <LoginButton>로그인</LoginButton>
        </Link>
      </div>
    </Nav>
  );
}

export default Navbar;
