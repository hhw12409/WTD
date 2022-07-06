import Banner from "@components/Banner/Banner";
import RecommendCard from "@components/Card/RecommendCard";
import styled from "styled-components";

const RootPage = () => {

  return (
    
    <Container>
      <Banner/>
      <RecommendCard/>
    </Container>
  )
}

const Container = styled.div`
  height: 300vh;
`

export default RootPage;