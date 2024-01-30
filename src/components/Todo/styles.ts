import styled from 'styled-components';

export const ContainerTodo = styled.div`
  border-radius: 20px;
  width: 100%;
  max-width: 390px;
  height: 437px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  background-color: white;

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
