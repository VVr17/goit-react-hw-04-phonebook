import styled from '@emotion/styled';

export const Title = styled.h1`
  display: block;
  padding-top: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.backgroundColor};
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.18;
  letter-spacing: 0.05em;
  text-align: center;
`;
