import Navbar from '@components/Navbar/Navbar';
import Button from '@components/@shared/Button/Button';
import FlexBox from '@components/@shared/FlexBox/FlexBox';
import { Link } from 'react-router-dom';
import Footer from '@components/Footer/Footer';

const HomePage = () => {
  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <div style={{ backgroundColor: '#eee', width: '100%', height: '500vh' }}>
        <FlexBox alignItems="center" justifyContent="center" width="100%" height="100px">
          <Link to="/recommend" style={{ textDecoration: 'none', color: 'white' }}>
            <Button
              backgroundColor="#57AE49"
              color="white"
              fontWeight="800"
              cursor="pointer"
              borderRadius="10px"
            >
              추천받기
            </Button>
          </Link>
        </FlexBox>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
