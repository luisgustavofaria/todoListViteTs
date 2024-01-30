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
}

export function App() {
  const [todoLists, setTodoLists] = useState<TodoList[]>([
    { id: '1', title: 'primeiro', description: 'tarefa' },
  ]);

  function addTodoList(newTitle: string, newDescription: string) {
    const data = {
      id: uuidv4(),
      title: newTitle,
      description: newDescription,
    };
    setTodoLists((oldstate) => [...oldstate, data]);
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
            />
          ))}
        </Container02>
      </Container01>
      <GlobalStyle />
    </ThemeProvider>
  );
}
