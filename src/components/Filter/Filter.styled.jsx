import styled from '@emotion/styled';

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.semiBold};

  input {
    margin-top: ${p => p.theme.space[1]}px;
    width: 96%;
    padding: ${p => p.theme.space[2]}px;
    outline: transparent;

    border: 1px solid ${p => p.theme.colors.btnColor};
    border-radius: 4px;
    /* transition: border-color 250ms var(--transition-timing); */

    &:focus {
      border-color: teal;
    }
  }
`;
