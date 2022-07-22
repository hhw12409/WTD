import FlexBox from '@components/@shared/FlexBox/FlexBox';
import { Container, FooterTitle } from './Footer.styles';

const Footer = () => {
  return (
    <Container>
      <FlexBox style={{ padding: `50px 120px` }} justifyContent="space-between">
        <FooterTitle>WTD</FooterTitle>
        <div>이용 약관 ㅣ 서비스 소개 ㅣ개인정보 처리방침</div>
      </FlexBox>
      <div style={{ padding: `40px 120px`, width: '50%' }}>
        <div>
          Contact. dkskrkwk@gmail.com Copyright.
          <br />
          What To DO All rights reserved.
        </div>
      </div>
    </Container>
  );
};

export default Footer;
