import {
  Colors,
  ContainerColors,
  ContainerTodo,
  ContainerTodoTextArea,
  ContainerTodoTitle,
  TodoFooter,
} from "./styles";

import favorited from "../../assets/favorited.svg";
import nofavorited from "../../assets/nofavorited.svg";
import noEdit from "../../assets/noEdit.svg";
import edit from "../../assets/edit.svg";
import colorEdit from "../../assets/color-edit.svg";
import colorEditing from "../../assets/color-editing.svg";
import deleted from "../../assets/deleted.svg";
import { useState } from "react";
import { ITodoList } from "../../App";
import { defaultTheme } from "../../styles/themes/default";

interface TodoProps {
  todo: ITodoList;
  onDeleteTodo: (todoID: string) => void;
  onToggleFavorite: (todoID: string) => void;
  onEditTodo: (
    todoID: string,
    editTitle: string,
    editDescription: string,
  ) => void;
}

export function Todo({
  todo,
  onDeleteTodo,
  onToggleFavorite,
  onEditTodo,
}: TodoProps) {
  const [disabled, setDisabled] = useState(true);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [hiddenDivColor, setHiddenDivColor] = useState(true);

  const colorsObject = defaultTheme.colors;
  const colorsArray = [...Object.values(colorsObject)];

  function onDisableTodo() {
    setDisabled((oldstate) => !oldstate);

    if (!disabled) {
      onEditTodo(todo.id, editTitle, editDescription);
    }
  }

  function onHiddenDivColor() {
    setHiddenDivColor((oldstate) => !oldstate);
  }

  return (
    <ContainerTodo>
      <ContainerTodoTitle>
        <input
          type="text"
          name="title"
          disabled={disabled}
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <img
          onClick={() => onToggleFavorite(todo.id)}
          src={todo.isFavorited ? favorited : nofavorited}
          alt=""
        />
      </ContainerTodoTitle>
      <ContainerTodoTextArea>
        <textarea
          name="description"
          disabled={disabled}
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
      </ContainerTodoTextArea>
      <TodoFooter>
        <div>
          <img onClick={onDisableTodo} src={disabled ? noEdit : edit} alt="" />
          <img
            onClick={onHiddenDivColor}
            src={hiddenDivColor ? colorEdit : colorEditing}
            alt=""
          />
        </div>
        <img onClick={() => onDeleteTodo(todo.id)} src={deleted} alt="" />
        {/* necessário usar arrow function para executar a função quando clicar no botao  */}
        {/* se usar onDeleteToDo(todo.id) a função é chamada quando renderizar a tela */}
      </TodoFooter>
      {!hiddenDivColor && (
        <ContainerColors>
          {colorsArray.map((color) => {
            return <Colors key={color} $backgroundColor={color} />;
          })}
        </ContainerColors>
      )}
    </ContainerTodo>
  );
}
