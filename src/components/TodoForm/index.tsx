import {
  ContainerForm,
  ContainerFormTextArea,
  ContainerFormTitle,
} from './styles';

import favorited from '../../assets/favorited.svg';

export function TodoForm() {
  return (
    <ContainerForm>
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
