import styled from '@emotion/styled';

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.18;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
