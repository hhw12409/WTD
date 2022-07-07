import {CardBox, FlexWrap, Container, Content, Title, About, Hash} from './RecommendCars.styles'

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

export default RecommendCard;
