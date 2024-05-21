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
import { useMemo, useState } from 'react';

import { useEffect } from 'react';
import axios from 'axios';

export interface ITodoList {
  id: string;
  title: string;
  description: string;
  isFavorited: boolean;
  color: string;
}

export function App() {
  const [todoList, setTodoList] = useState<ITodoList[]>([]);

  // async function loadTodoList() {
  //   const response = await fetch(' http://localhost:3333/todoList ');
  //   const data = await response.json();

  //   setTodoList(data);
  // }

  async function getTodoList() {
    try {
      const response = await axios.get('http://localhost:3333/tasks/list-many');
      setTodoList(response.data);
    } catch (error) {
      // Handle the error if needed
    }
  }

  useEffect(() => {
    getTodoList();
  }, []);

  async function addTodo(
    newTitle: string,
    newDescription: string,
    toggleFavorite: boolean
  ) {
    const data = {
      title: newTitle,
      description: newDescription,
      isFavorited: toggleFavorite,
      color: 'white',
    };
    // setTodoList([...todoList, data]); esse codigo tbm funciona mas pode dar erro.
    // Se durante o tempo de espera da operação assíncrona, um usuário adiciona um novo item à lista
    // (addTodoList é chamado) nesse caso, se apertar enter rapido demais, com a abordagem direta
    // (setTodoLists([...todoLists, data])) pode perder atualizações de estado.
    //
    // console.log(data.id);

    try {
      const task = await axios.post('http://localhost:3333/tasks/create', data);
      setTodoList((oldstate) => [...oldstate, task.data]); //usar esse codigo para operaçoes assincronas
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }

  async function toggleIsFavorited(todoID: string, toggleFavorite: boolean) {
    // const newTodoList = todoList.map((todo) => {
    //   if (todo.id === todoID) {
    //     return {
    //       ...todo,
    //       isFavorited: !todo.isFavorited,
    //     };
    //   }
    //   return todo;
    // });

    // setTodoList(newTodoList);
    // esse codigo tbm funciona mas pode dar erro e pode perder atualizações de estado.

    setTodoList((oldstate) =>
      oldstate.map((todo) =>
        todo.id === todoID ? { ...todo, isFavorited: !toggleFavorite } : todo
      )
    );
    //usar esse codigo para operaçoes assincronas
    try {
      await axios.put(`http://localhost:3333/tasks/${todoID}`, {
        isFavorited: !toggleFavorite,
      });
    } catch (error) {
      // Handle the error if needed
    }
  }

  async function editTodo(
    todoID: string,
    editTitle: string,
    editDescription: string
  ) {
    // const newTodoList = todoList.map((todo) => {
    //   if (todo.id === todoID) {
    //     return {
    //       ...todo,
    //       title: editTitle,
    //       description: editDescription,
    //     };
    //   }
    //   return todo;
    // });

    // setTodoList(newTodoList);
    // console.log(newTodoList);

    //esse codigo tbm funciona mas pode dar erro.

    setTodoList((oldstate) =>
      oldstate.map((todo) =>
        todo.id === todoID
          ? { ...todo, title: editTitle, description: editDescription }
          : todo
      )
    );
    // console.log(todoList);
    try {
      await axios.put(`http://localhost:3333/tasks/${todoID}`, {
        title: editTitle,
        description: editDescription,
      });
    } catch (error) {
      // Handle the error if needed
    }
  }

  async function editBackgroundColorDiv(todoID: string, colorID: string) {
    // const newTodoList = todoList.map((todo) => {
    //   if (todo.id === todoID) {
    //     return {
    //       ...todo,
    //       color: colorID,
    //     };
    //   }
    //   return todo;
    // });
    // setTodoList(newTodoList);

    setTodoList((oldstate) =>
      oldstate.map((todo) =>
        todo.id === todoID ? { ...todo, color: colorID } : todo
      )
    );
    try {
      //await axiosEditBackgroundColorDiv(todoID, colorID);
      await axios.put(`http://localhost:3333/tasks/${todoID}`, {
        color: colorID,
      });
    } catch (error) {
      // Handle the error if needed
    }
  }

  async function deleteTodo(todoID: string) {
    // const newTodoList = todoList.filter((todo) => todo.id !== todoID);
    // setNewToDo(newTodoList);
    // esse codigo tbm funciona mas pode dar erro e pode perder atualizações de estado.

    setTodoList((oldstate) => oldstate.filter((todo) => todo.id !== todoID));
    //usar esse codigo para operaçoes assincronas
    try {
      await axios.delete(`http://localhost:3333/tasks/${todoID}`);
    } catch (error) {
      // Handle the error if needed
    }
  }

  // function searchTodo(searchTodoID: string) {
  //   const filterList = searchTodoID
  //     ? todoList.filter((todo) =>
  //         `${todo.title?.toLocaleLowerCase()}${todo.description?.toLocaleLowerCase()}`.includes(
  //           searchTodoID
  //         )
  //       )
  //     : [...todoList];
  //   setTodoList(filterList);

  //   DESTA FORMA NAO FUNCIONA POIS ATUALIZA O ESTADO E NAO ARMAZENA A LISTA
  // }

  const [searchTerm, setSearchTerm] = useState('');

  function searchTodo(searchTodoID: string) {
    setSearchTerm(searchTodoID); // Atualiza o estado com o termo de pesquisa
  }

  const filterList = useMemo(() => {
    return searchTerm
      ? todoList.filter((todo) =>
          `${todo.title?.toLocaleLowerCase()}${todo.description?.toLocaleLowerCase()}`.includes(
            searchTerm
          )
        )
      : [...todoList];
  }, [todoList, searchTerm]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header onSearchTodo={searchTodo} />
      <Container01>
        <TodoForm onAddToDo={addTodo} />
        {filterList.find((todo) => todo.isFavorited) && (
          <Container02>
            <span>Favorito</span>
            <Container03>
              {filterList
                .filter((todo) => todo.isFavorited)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={deleteTodo}
                    onToggleFavorite={toggleIsFavorited}
                    onEditTodo={editTodo}
                    onEditBackgroundColorDiv={editBackgroundColorDiv}
                  />
                ))}
            </Container03>
          </Container02>
        )}
        {filterList.find((todo) => !todo.isFavorited) && (
          <Container02>
            <span>Outros</span>
            <Container03>
              {filterList
                .filter((todo) => !todo.isFavorited)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={deleteTodo}
                    onToggleFavorite={toggleIsFavorited}
                    onEditTodo={editTodo}
                    onEditBackgroundColorDiv={editBackgroundColorDiv}
                  />
                ))}
            </Container03>
          </Container02>
        )}
      </Container01>
      <GlobalStyle />
    </ThemeProvider>
  );
}
