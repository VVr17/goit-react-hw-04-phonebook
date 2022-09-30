import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[3]}px;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.semiBold};
`;

export const Input = styled.input`
  margin-top: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[2]}px;
  width: 96%;
  outline: transparent;
  background-color: ${p =>
    p.theme.colors[p.backgroundColor] || p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors[p.border]};
  border-radius: ${p => p.theme.space[1]}px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border-color: ${p => p.theme.colors.inputFocusColor};
  }
`;

export const ErrorText = styled.p`
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontSizes.xs};
`;
