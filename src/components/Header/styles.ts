import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: 3.56rem;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
`;

export const ContainerHeader = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  //acessar div 1
  :nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-left: 10px;
  }

  //acessar div 2
  :nth-of-type(2) {
    width: 50px;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-right: 10px;

    img {
      width: 13.14px;
    }
  }

  p {
    font-size: 0.75rem;
    color: #455a64;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  }

  label {
    width: 530px;
    height: 28px;
    padding: 1px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 3px;

    input {
      width: 100%;
      border: none;
      background-color: white;
      margin-left: 10px;
    }
    ::placeholder {
      color: #9a9a9a;
    }
    :focus-visible {
      outline: none;
    }

    img {
      width: 12.61px;
      height: 13.5px;
      margin-right: 10px;
    }

    @media (max-width: 900px) {
      width: 100%;
      max-width: 530px;
    }
  }
`;
