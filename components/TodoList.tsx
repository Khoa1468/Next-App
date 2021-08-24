import Template from "layouts/Template";
import Todo from "./Todo";
import { todoInterface } from "pages/todos";

interface TodoListProps {
  todos?: todoInterface[];
  checkBtn: (id: string | number) => void;
}

export default function TodoList({ todos = [], checkBtn }: TodoListProps) {
  return (
    <Template headingTitle="Todo" wrappedElement="fragment">
      {todos.map((value) => {
        return <Todo key={value.id} checkBtn={checkBtn} todo={value} />;
      })}
    </Template>
  );
}
