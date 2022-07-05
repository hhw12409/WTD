import styled from "styled-components";
import { FONT } from "../../constants/font"
import { SIZE } from "../../constants/size"

function CardTemplage() {
  return (
    <FlexWrap>
      <CardBox/>
      <CardBox/>
    </FlexWrap>
  )
}

function RecommendTemplate() {
  return (
    <Container>
      <CardTemplage/>
      <CardTemplage/>
      <Content>
        <Title>테마 추천 코스</Title>
        <About>여러가지 테마로 다른 사람들이 공유한 코스를 볼 수 있어요.</About>
        <Hash>#친구와함께 #부모님과 함께 #나만의 힐링코스</Hash>
        <Hash>#아이들과 함께 #맛집 코스</Hash>
        <About>여러 사람들이 자신들만의 코스를 공유한 공간입니다.</About>
      </Content>
    </Container>
  )
}

function RecommendCard() {

  return (
    <>
      <RecommendTemplate/>
      <RecommendTemplate/>
      <RecommendTemplate/>
    </>
  );
}

const CardBox = styled.div`
  background: #D9D9D9;
  border-radius: 20px;
  width: 230px;
  height: 230px;
  margin: 10px;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin-top: 150px;
`

const Content = styled(FlexWrap)`
  height: 450px;
  justify-content: flex-start;
`
const Title = styled.h1`
  font-size: 50px;
`

const About = styled.h3`
  font-size: 20px;
  margin-bottom: 30px;
`

const Hash = styled.p`
  margin-bottom: 10px;
`

export default RecommendCard;
