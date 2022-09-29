import styled from '@emotion/styled';

export const ContactStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;

  background-color: rgba(247, 227, 201, 0.4);
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.s};

  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
