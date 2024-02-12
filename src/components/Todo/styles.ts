import styled from "styled-components";

interface ColorsProps {
  $backgroundColor: string;
}

export const ContainerTodo = styled.div`
  border-radius: 20px;
  width: 100%;
  max-width: 390px;
  height: 437px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  background-color: white;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const ContainerTodoTitle = styled.div`
  /* border: solid 1px red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #f0f2f5;
  padding: 2px 10px 2px;

  input {
    padding: 5px;
    border: none;
    flex-grow: 1;
    background-color: white;
  }

  ::placeholder {
    height: 13px;
    color: #333333;
    font-weight: bold;
  }
  :focus-visible {
    outline: none;
  }

  img {
    padding: 5px;
    cursor: pointer;
  }
`;

export const ContainerTodoTextArea = styled.div`
  /* border: solid 1px red; */
  padding: 5px 10px 2px;
  flex-grow: 1;

  textarea {
    font-size: 11px;
    color: #50656e;
    padding: 5px;
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    background-color: white;
    overflow: hidden;
  }
  :focus-visible {
    outline: none;
  }
`;

export const TodoFooter = styled.div`
  /* border: solid 1px red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2px 5px 2px;

  div {
    display: flex;
  }

  img {
    padding: 10px;
    cursor: pointer;
  }
`;

export const ContainerColors = styled.div`
  background-color: white;
  width: 574.61px;
  height: 46.46px;
  position: absolute;
  bottom: -40px;
  left: 40px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;

  @media (max-width: 860px) {
    width: 290px;
    height: 100px;
    flex-wrap: wrap;
    gap: 10px;
    z-index: 1;
    bottom: -90px;
  }
`;

export const Colors = styled.div<ColorsProps>`
  width: 36.71px;
  height: 36.71px;
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  cursor: pointer;

  @media (max-width: 800px) {
    max-width: 390px;
  }
`;
/* background-color: ${(props) => props.theme.colors.ellipse5}; */
