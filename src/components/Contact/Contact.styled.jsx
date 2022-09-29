import styled from '@emotion/styled';

export const ContactStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;

  background-color: ${p => p.theme.colors.backgroundContactCardColor};
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.s};

  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
