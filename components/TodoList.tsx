import Component from "layouts/Component";
import Todo from "./Todo";
import { todoInterface } from "pages/todos";

interface TodoListProps {
  todos?: todoInterface[];
  checkBtn: (id: string | number) => void;
}

export default function TodoList({ todos = [], checkBtn }: TodoListProps) {
  return (
    <Component wrappedElement="fragment">
      {todos.map((value) => {
        return <Todo key={value.id} checkBtn={checkBtn} todo={value} />;
      })}
    </Component>
  );
}
