import styled from "styled-components";
import { FONT } from "../../constants/font"
import { SIZE } from "../../constants/size"

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

export {CardBox, Container,FlexWrap, Content, Title, About, Hash}