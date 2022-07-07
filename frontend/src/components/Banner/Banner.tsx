import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { BannerBg, BannerBox, BannerWrapper, BannerTitle, BannerContent, BannerHome } from './Banner.styles'

function Banner() {
  return (
    <BannerBg>
      <BannerBox>
        <BannerWrapper>
          <BannerTitle>What to Do 와 함께 완벽한 하루를</BannerTitle>
          <BannerContent>
            What To Do 는 보다 나은 하루를 위해 여행코스를 추천해드리고 있습니다.<br/>
            (JINI)의 질문을 답을하면 현재 당신에게 최적의 코스를 추천해드립니다.<br/>
            다른사람들에게 자신만의 여행코스를 공유할 수 있어요
          </BannerContent>
        </BannerWrapper>
        <BannerHome>Homepage<ArrowRightIcon fontSize="large"/></BannerHome>
      </BannerBox>
    </BannerBg>
  );
}

export default Banner;
