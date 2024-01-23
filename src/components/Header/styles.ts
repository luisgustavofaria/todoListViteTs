import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;
  height: 3.56rem;
  background-color: white;
  padding: 0rem 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  img {
  }

  p {
    font-size: 0.75rem;
    color: #455a64;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

export const ContainerInput = styled.div`
  display: flex;
`;
