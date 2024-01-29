import {
  ContainerForm,
  ContainerFormTextArea,
  ContainerFormTitle,
} from './styles';

import favorited from '../../assets/favorited.svg';
import { useState } from 'react';

interface TodoFormProps {
  onAddTodoList: (title: string, description: string) => void;
}

export function TodoForm({ onAddTodoList }: TodoFormProps) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddTodoList(newTitle, newDescription);
    setNewTitle('');
    setNewDescription('');
  }

  function handleCreatedNewTitle(
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) {
    event.preventDefault();
    console.log(event?.target.value);

    setNewTitle(event?.target.value);
  }

  function handleCreatedNewDescription(
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) {
    event.preventDefault();
    console.log(event?.target.value);

    setNewDescription(event?.target.value);
  }

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <ContainerFormTitle>
        <input
          name="title"
          type="text"
          placeholder="Título"
          onChange={handleCreatedNewTitle}
          value={newTitle}
        />
        <img src={favorited} alt="" />
      </ContainerFormTitle>
      <ContainerFormTextArea>
        <input
          name="description"
          type="text"
          placeholder="Criar Nota..."
          onChange={handleCreatedNewDescription}
          value={newDescription}
        />
      </ContainerFormTextArea>
    </ContainerForm>
  );
}
