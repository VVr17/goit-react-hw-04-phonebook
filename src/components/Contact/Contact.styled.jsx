import styled from '@emotion/styled';

export const ContactStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  box-shadow: ${p => p.theme.boxShadow.first};
  background-color: ${p => p.theme.colors.backgroundContactCardColor};

  :not(:last-of-type) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }

  ${p => p.theme.mediaQueries.medium} {
    padding: ${p => p.theme.space[3]}px;
  }

  ${p => p.theme.mediaQueries.large} {
    padding: ${p => p.theme.space[4]}px;
  }

  p {
    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeight.semiBold};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.18;
    margin-bottom: ${p => p.theme.space[1]}px;

    ${p => p.theme.mediaQueries.medium} {
      font-size: ${p => p.theme.fontSizes.s};
      margin-bottom: 0;

      :not(:last-of-type) {
        margin-right: ${p => p.theme.space[3]}px;
      }
    }

    ${p => p.theme.mediaQueries.large} {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
`;
