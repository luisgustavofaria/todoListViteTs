import {
  ContainerForm,
  ContainerFormTextArea,
  ContainerFormTitle,
} from './styles';

import favorited from '../../assets/favorited.svg';
import nofavorited from '../../assets/nofavorited.svg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface TodoFormProps {
  onAddToDo: (title: string, description: string, isFavorited: boolean) => void;
}

interface TodoFormData {
  title: string;
  description: string;
}

export function TodoForm({ onAddToDo }: TodoFormProps) {
  const { register, handleSubmit, reset } = useForm<TodoFormData>();

  const [isFavorited, setIsFavorited] = useState(false);

  function onSubmitForm(data: TodoFormData) {
    onAddToDo(data.title, data.description, isFavorited);
    console.log(data);
    reset();
    setIsFavorited(false);
  }

  function changeFavorited() {
    setIsFavorited((oldstate) => !oldstate);
  }

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitForm)}>
      <ContainerFormTitle>
        <input type="text" placeholder="Título" {...register('title')} />
        <img
          onClick={changeFavorited}
          src={isFavorited ? favorited : nofavorited}
          alt=""
        />
      </ContainerFormTitle>
      <ContainerFormTextArea>
        <input
          type="text"
          placeholder="Criar Nota..."
          {...register('description')}
        />
      </ContainerFormTextArea>
      <button></button>
      {/* button serve somente para funcionar o onSubmit */}
    </ContainerForm>
  );
}
