import styled from '@emotion/styled';
import { FONT } from '../../constants/font';
import { SIZE } from '../../constants/size';

const BannerBg = styled.div`
  background-image: url('https://source.unsplash.com/random/');
  background-size: cover;
  background-position: center;
  width: var(--banner-size-width);
  height: var(--banner-size-height);
`;

const BannerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--banner-size-height);
`;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const BannerTitle = styled.div`
  color: var(--color-white);
  font-weight: var(--font-weight-small);
  font-size: var(--font-size-medium);
  width: 100%;
  text-align: start;
  margin-bottom: var(--margin-size-small);
`;

const BannerContent = styled.div`
  color: var(--color-white);
  width: 100%;
  text-align: start;
  line-height: var(--line-height-medium);
`;

const BannerHome = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  border: 1px solid black;
  background: white;
  color: black;
  padding: 5px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 800;
  &:hover {
    color: white;
    background: #eee;
  }
`;

export { BannerBg, BannerBox, BannerWrapper, BannerTitle, BannerContent, BannerHome };
