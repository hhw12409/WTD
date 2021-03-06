import styled from '@emotion/styled';
import Flex from '../../../styles/Flex';

const FlexBox = styled.div<React.CSSProperties>`
  ${({ flexDirection, justifyContent, flexWrap, alignItems, rowGap, columnGap }) =>
    Flex({ flexDirection, justifyContent, flexWrap, alignItems, rowGap, columnGap })}
  ${({ margin }) => `margin: ${margin}`};
  ${({ height }) => `height: ${height}`};
  ${({ width }) => `width: ${width}`};
`;

export default FlexBox;
