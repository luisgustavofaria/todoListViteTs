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

interface TodoProps {
  title: string;
  description: string;
  isFavorited: boolean;
}

export function Todo({ title, description, isFavorited }: TodoProps) {
  const [star, setStar] = useState(isFavorited);

  function changeFavorited() {
    setStar((oldstate) => !oldstate);
  }

  return (
    <ContainerTodo>
      <ContainerTodoTitle>
        <input type="text" name="title" defaultValue={title} />
        <img
          onClick={changeFavorited}
          src={star ? favorited : nofavorited}
          alt=""
        />
      </ContainerTodoTitle>
      <ContainerTodoTextArea>
        <textarea name="description" defaultValue={description} />
      </ContainerTodoTextArea>
      <TodoFooter>
        <div>
          <img src={edit} alt="" />
          <img src={colorEdit} alt="" />
        </div>
        <img src={deleted} alt="" />
      </TodoFooter>
    </ContainerTodo>
  );
}
