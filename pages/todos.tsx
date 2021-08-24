import Template from "layouts/Template";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState, useEffect } from "react";
import { v4 } from "uuid";
import TodoList from "./../components/TodoList";
import Heading from "components/Head";
import Head from "next/head";

export interface todoInterface {
  id: string | number;
  title: string;
  isComplete: boolean;
}

const TODO_SESSION_STORAGE_KEY = "todos";

export default function Todos() {
  const [text, setText] = useState<string>("");
  const [todoArray, setTodoArray] = useState<todoInterface[]>([]);
  const [init, setInit] = useState<string>("init");
  useEffect(() => {
    const storage = localStorage.getItem(TODO_SESSION_STORAGE_KEY);
    if (storage) {
      setTodoArray(JSON.parse(storage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(TODO_SESSION_STORAGE_KEY, JSON.stringify(todoArray));
  }, [todoArray]);
  const handleOnChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const handleOnClick = useCallback(
    (e) => {
      setTodoArray([
        { id: v4(), title: text, isComplete: false },
        ...todoArray,
      ]);
      // todoArray.push({ id: v4(), title: text, isComplete: false });
      setText("");
    },
    [text, todoArray]
  );
  const onCheckBtnClick = useCallback((id: string | number) => {
    setTodoArray((prev) =>
      prev.map((todo) => {
        const { isComplete } = todo;
        return todo.id === id ? { ...todo, isComplete: !isComplete } : todo;
      })
    );
  }, []);
  return (
    <Template headingTitle="Todo" className="todo" wrappedElement="main">
      <h2>TodoList</h2>
      <br />
      <Textfield
        name="add-todo"
        placeholder="Thêm Việc Cần Làm"
        elemAfterInput={
          <Button
            isDisabled={!text}
            appearance="primary"
            onClick={handleOnClick}
          >
            Add
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        onChange={handleOnChange}
        value={text}
      ></Textfield>
      <TodoList todos={todoArray} checkBtn={onCheckBtnClick} />
    </Template>
  );
}
