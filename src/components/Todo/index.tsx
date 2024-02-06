import {
  ContainerTodo,
  ContainerTodoTextArea,
  ContainerTodoTitle,
  TodoFooter,
} from "./styles";

import favorited from "../../assets/favorited.svg";
import nofavorited from "../../assets/nofavorited.svg";
import edit from "../../assets/edit.svg";
import colorEdit from "../../assets/color-edit.svg";
import deleted from "../../assets/deleted.svg";
import { useState } from "react";
import { ITodoList } from "../../App";

interface TodoProps {
  todo: ITodoList;
  onDeleteToDo: (todoID: string) => void;
}

export function Todo({ todo, onDeleteToDo }: TodoProps) {
  const [favorite, setFavorite] = useState(todo.isFavorited);

  function changeFavorited() {
    setFavorite((oldstate) => !oldstate);
  }

  return (
    <ContainerTodo>
      <ContainerTodoTitle>
        <input type="text" name="title" defaultValue={todo.title} />
        <img
          onClick={changeFavorited}
          src={favorite ? favorited : nofavorited}
          alt=""
        />
      </ContainerTodoTitle>
      <ContainerTodoTextArea>
        <textarea name="description" defaultValue={todo.description} />
      </ContainerTodoTextArea>
      <TodoFooter>
        <div>
          <img src={edit} alt="" />
          <img src={colorEdit} alt="" />
        </div>
        <img onClick={() => onDeleteToDo(todo.id)} src={deleted} alt="" />
        {/* necessário usar arrow function para executar a função quando clicar no botao  */}
        {/* se usar onDeleteToDo(todo.id) a função é chamada quando renderizar a tela */}
      </TodoFooter>
    </ContainerTodo>
  );
}
