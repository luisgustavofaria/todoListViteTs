import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Container01, Container02 } from './components/Container/styles';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TodoList {
  id: string;
  title: string;
  description: string;
  isFavorited: boolean;
}

export function App() {
  const [todoLists, setTodoLists] = useState<TodoList[]>([
    { id: '1', title: 'primeiro', description: 'tarefa', isFavorited: true },
  ]);

  function addTodoList(
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
    setTodoLists((oldstate) => [...oldstate, data]); //usar esse codigo para operaçoes assincronas
    // setTodoLists([...todoLists, data]); esse codigo tbm funciona mas pode dar erro.
    // Se durante o tempo de espera da operação assíncrona, um usuário adiciona um novo item à lista (addTodoList é chamado) nesse caso, se apertar enter rapido demais, com a abordagem direta (setTodoLists([...todoLists, data])) pode perder atualizações de estado.
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container01>
        <TodoForm onAddTodoList={addTodoList} />
        <Container02>
          {todoLists.map((todo) => (
            <Todo
              key={todo.id}
              title={todo.title}
              description={todo.description}
              isFavorited={todo.isFavorited}
            />
          ))}
        </Container02>
      </Container01>
      <GlobalStyle />
    </ThemeProvider>
  );
}
