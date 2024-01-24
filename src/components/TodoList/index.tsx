import { Todo } from '../Todo';
import { TodoForm } from '../TodoForm';
import { ContainerTodoList } from './styles';

export function TodoList() {
  return (
    <ContainerTodoList>
      <TodoForm />
      <Todo />
    </ContainerTodoList>
  );
}
