import styled from "styled-components";

const BannerBg = styled.div`
  background-image: url("https://source.unsplash.com/random/");
  background-size: cover;
  background-position: center;
  width: var(--banner-size-width);
  height: var(--banner-size-height);
  margin-top: var(--margin-size-base);
`;

const BannerBox = styled.div`
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--banner-size-height);
`;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction : column;
  width : 50%;
`

const BannerTitle = styled.div`
  color: var(--color-white);
  font-weight: var(--font-weight-small);
  font-size: var(--font-size-medium);
  width : 100%;
  text-align : start;
  margin-bottom : var(--margin-size-small);
`;

const BannerContent = styled.div`
  color : var(--color-white);
  width : 100%;
  text-align : start;
  line-height : var(--line-height-medium)
`;

const BannerHome = styled.div`
  color : var(--color-white);
  font-size : var(--font-size-medium);
  text-transform : uppercase;
`

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
        <BannerHome>Homepage</BannerHome>
      </BannerBox>
    </BannerBg>
  );
}

export default Banner;