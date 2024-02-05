import {
  ContainerTodo,
  ContainerTodoTextArea,
  ContainerTodoTitle,
  TodoFooter,
} from './styles';

import favorited from '../../assets/favorited.svg';
import nofavorited from '../../assets/nofavorited.svg';
import edit from '../../assets/edit.svg';
import colorEdit from '../../assets/color-edit.svg';
import deleted from '../../assets/deleted.svg';
import { useState } from 'react';
import { ITodoList } from '../../App';

interface TodoProps {
  todo: ITodoList;
  onDeleteToDo: () => void;
}

export function Todo({ todo, onDeleteToDo }: TodoProps) {
  const [star, setStar] = useState(todo.isFavorited);

  function changeFavorited() {
    setStar((oldstate) => !oldstate);
  }

  return (
    <ContainerTodo>
      <ContainerTodoTitle>
        <input type="text" name="title" defaultValue={todo.title} />
        <img
          onClick={changeFavorited}
          src={star ? favorited : nofavorited}
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
        <img onClick={onDeleteToDo} src={deleted} alt="" />
      </TodoFooter>
    </ContainerTodo>
  );
}
