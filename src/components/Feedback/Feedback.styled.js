import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  background-color: white;
  font-size: 25px;
  border-radius: 7%;
  border: solid #998a8a 3px;
  padding-left: 25px;
  padding-right: 25px;

  :active {
    background-color: #0000ff47;
  }
`;
