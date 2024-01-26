import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Container01, Container02 } from './components/Container/styles';
import { Todo } from './components/Todo';
import { TodoForm } from './components/TodoForm';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container01>
        <TodoForm />
        <Container02>
          <Todo />
          <Todo />
          <Todo />
        </Container02>
      </Container01>
      <GlobalStyle />
    </ThemeProvider>
  );
}
