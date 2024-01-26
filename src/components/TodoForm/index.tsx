import {
  ContainerForm,
  ContainerFormTextArea,
  ContainerFormTitle,
} from './styles';

import favorited from '../../assets/favorited.svg';
import { useState } from 'react';

export function TodoForm() {
  const [newtodo, setNewTodo] = useState();

  function handleCreatedNewTodo() {
    event?.preventDefault();

    console.log('oi');
  }

  return (
    <ContainerForm onSubmit={handleCreatedNewTodo}>
      <ContainerFormTitle>
        <input type="text" placeholder="Título" />
        <img src={favorited} alt="" />
      </ContainerFormTitle>
      <ContainerFormTextArea>
        <textarea>Criar Nota...</textarea>
      </ContainerFormTextArea>
    </ContainerForm>
  );
}
