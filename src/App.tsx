import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import {
  Container01,
  Container02,
  Container03,
} from './components/Container/styles';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ITodoList {
  id: string;
  title: string;
  description: string;
  isFavorited: boolean;
}

export function App() {
  const [newToDo, setNewToDo] = useState<ITodoList[]>([
    { id: '1', title: 'primeiro', description: 'tarefa', isFavorited: true },
  ]);

  function addToDo(
    newTitle: string,
    newDescription: string,
    isFavorited: boolean
  ) {
    const data = {
      id: uuidv4(),
      title: newTitle,
      description: newDescription,
      isFavorited: isFavorited,
    };
    setNewToDo((oldstate) => [...oldstate, data]); //usar esse codigo para operaçoes assincronas
    // setTodoLists([...newToDo, data]); esse codigo tbm funciona mas pode dar erro.
    // Se durante o tempo de espera da operação assíncrona, um usuário adiciona um novo item à lista (addTodoList é chamado) nesse caso, se apertar enter rapido demais, com a abordagem direta (setTodoLists([...todoLists, data])) pode perder atualizações de estado.
    //
    // console.log(data.id);
  }

  function deleteToDo(todoID: string) {
    // const newToDoList = todoList.filter((todo) => todo.id !== todoID);
    // setNewToDo(newToDoList);
    // esse codigo tbm funciona mas pode dar erro

    setNewToDo((oldstate) => oldstate.filter((todo) => todo.id !== todoID));
    //usar esse codigo para operaçoes assincronas
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container01>
        <TodoForm onAddToDo={addToDo} />

        <Container02>
          <span>Favorito</span>
          <Container03>
            {newToDo.map((todo) => (
              <Todo key={todo.id} todo={todo} onDeleteToDo={deleteToDo} />
            ))}
          </Container03>
        </Container02>
        <Container02>
          <span>Outros</span>
          <Container03>
            {newToDo.map((todo) => (
              <Todo key={todo.id} todo={todo} onDeleteToDo={deleteToDo} />
            ))}
          </Container03>
        </Container02>
      </Container01>
      <GlobalStyle />
    </ThemeProvider>
  );
}
