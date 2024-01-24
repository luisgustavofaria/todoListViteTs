import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <TodoList />
      <GlobalStyle />
    </ThemeProvider>
  );
}
