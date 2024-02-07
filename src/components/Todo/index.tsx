import {
  ContainerTodo,
  ContainerTodoTextArea,
  ContainerTodoTitle,
  TodoFooter,
} from './styles';

import favorited from '../../assets/favorited.svg';
import nofavorited from '../../assets/nofavorited.svg';
import noEdit from '../../assets/noEdit.svg';
import edit from '../../assets/edit.svg';
import colorEdit from '../../assets/color-edit.svg';
import deleted from '../../assets/deleted.svg';
import { useState } from 'react';
import { ITodoList } from '../../App';

interface TodoProps {
  todo: ITodoList;
  onDeleteTodo: (todoID: string) => void;
  onToggleFavorite: (todoID: string) => void;
  onEditTodo: (todoID: string, title: string, description: string) => void;
}

export function Todo({
  todo,
  onDeleteTodo,
  onToggleFavorite,
  onEditTodo,
}: TodoProps) {
  const [disabled, setDisabled] = useState(true);

  function onDisableTodo() {
    setDisabled((oldstate) => !oldstate);

    if (!disabled) {
      onEditTodo(todo.id, todo.title, todo.description);
    }
  }

  return (
    <ContainerTodo>
      <ContainerTodoTitle>
        <input
          type="text"
          name="title"
          disabled={disabled}
          defaultValue={todo.title}
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
          defaultValue={todo.description}
        />
      </ContainerTodoTextArea>
      <TodoFooter>
        <div>
          <img onClick={onDisableTodo} src={disabled ? noEdit : edit} alt="" />
          <img src={colorEdit} alt="" />
        </div>
        <img onClick={() => onDeleteTodo(todo.id)} src={deleted} alt="" />
        {/* necessário usar arrow function para executar a função quando clicar no botao  */}
        {/* se usar onDeleteToDo(todo.id) a função é chamada quando renderizar a tela */}
      </TodoFooter>
    </ContainerTodo>
  );
}
