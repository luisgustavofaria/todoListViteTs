import {
  ContainerForm,
  ContainerFormTextArea,
  ContainerFormTitle,
} from './styles';

import favorited from '../../assets/favorited.svg';
import nofavorited from '../../assets/nofavorited.svg';
import { useState } from 'react';

interface TodoFormProps {
  onAddTodoList: (
    title: string,
    description: string,
    isFavorited: boolean
  ) => void;
}

export function TodoForm({ onAddTodoList }: TodoFormProps) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isFavorited, setIsFavorited] = useState(Boolean);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddTodoList(newTitle, newDescription, isFavorited);
    setNewTitle('');
    setNewDescription('');
    setIsFavorited(false);
  }

  function handleNewTitle(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setNewTitle(event?.target.value);
  }

  function handleNewDescription(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setNewDescription(event?.target.value);
  }

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <ContainerFormTitle>
        <input
          name="title"
          type="text"
          placeholder="Título"
          onChange={handleNewTitle}
          value={newTitle}
        />
        <img src={isFavorited ? nofavorited : favorited} alt="" />
      </ContainerFormTitle>
      <ContainerFormTextArea>
        <input
          name="description"
          type="text"
          placeholder="Criar Nota..."
          onChange={handleNewDescription}
          value={newDescription}
        />
      </ContainerFormTextArea>
      <button></button>
      {/* button serve somente para funcionar o onSubmit */}
    </ContainerForm>
  );
}
