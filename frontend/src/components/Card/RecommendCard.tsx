import styled from "styled-components";
import { FONT } from "../../constants/font"
import { SIZE } from "../../constants/size"

function RecommendTemplate() {
  return (
    <Container>
      <FlexColumn>
        <CardBox/>
        <CardBox/>
      </FlexColumn>
      <FlexColumn>
        <CardBox/>
        <CardBox/>
      </FlexColumn>
      <Top>
        <h1>테마 추천 코스</h1>
        <h3>여러가지 테마로 다른 사람들이 공유한 코스를 볼 수 있어요.</h3>
        <p>#친구와함께 #부모님과 함께 #나만의 힐링코스</p>
        <p>#아이들과 함께 #맛집 코스</p>
        <p>여러 사람들이 자신들만의 코스를 공유한 공간입니다.</p>
      </Top>
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

const FlexColumn = styled.div`
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

const Top = styled(FlexColumn)`
  height: 400px;
  justify-content: flex-start;
`

export default RecommendCard;
