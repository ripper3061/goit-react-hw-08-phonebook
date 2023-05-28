import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Email = styled.p`
  font-weight: 700;
  margin: 0;
  margin-right: 12px;
`;

export const Button = styled.button`
  justify-content: space-between;
  width: 100px;
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #dedede;
  color: #2c2c2c;
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: 4px;

  border-radius: 4px;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  &:hover {
    background-color: #02c0ff;
    color: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
