import Navbar from '@components/Navbar/Navbar';
import Button from '@components/@shared/Button/Button';
import FlexBox from '@components/@shared/FlexBox/FlexBox';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#eee', width: '100%', height: '100px' }}>
        <FlexBox alignItems="center" justifyContent="center" width="100%" height="100px">
          <Button backgroundColor="#57AE49" color="white" fontWeight="800" cursor="pointer">
            <Link to="/recommend" style={{ textDecoration: 'none', color: 'white' }}>
              추천받기
            </Link>
          </Button>
        </FlexBox>
      </div>
    </>
  );
};

export default HomePage;
