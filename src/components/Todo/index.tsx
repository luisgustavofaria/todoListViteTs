import {
  ContainerTodo,
  ContainerTodoTextArea,
  ContainerTodoTitle,
  TodoFooter,
} from './styles';

import favorited from '../../assets/favorited.svg';
import edit from '../../assets/edit.svg';
import colorEdit from '../../assets/color-edit.svg';
import deleted from '../../assets/deleted.svg';

export function Todo() {
  return (
    <ContainerTodo>
      <ContainerTodoTitle>
        <input type="text" placeholder="Título" />
        <img src={favorited} alt="" />
      </ContainerTodoTitle>
      <ContainerTodoTextArea>
        <textarea>Criar Nota...</textarea>
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
