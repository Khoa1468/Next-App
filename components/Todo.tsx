import Template from "layouts/Template";
import Button from "@atlaskit/button";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import { todoInterface } from "pages/todos";

const ButtonStyled = styled(Button)`
  cursor: pointer;
  margin-top: 5px;
  text-align: left;

  text-decoration: ${(p: { isComplete: boolean }) =>
    p.isComplete && "line-through"};

  &:hover {
    .check-icon {
      display: inline;
    }
  }

  .check-icon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

export default function Todo(props: {
  todo: todoInterface;
  checkBtn: (id: string | number) => void;
}) {
  return (
    <Template headingTitle="Todo" wrappedElement="fragment">
      <ButtonStyled
        isComplete={props.todo.isComplete}
        isDisabled={props.todo.isComplete}
        shouldFitContainer
        iconAfter={
          !props.todo.isComplete && (
            <span
              className="check-icon"
              onClick={() => props.checkBtn(props.todo.id)}
            >
              <CheckIcon primaryColor="#4fff4f" label="" />
            </span>
          )
        }
      >
        {props.todo.title}
      </ButtonStyled>
    </Template>
  );
}
