import Template from "layouts/Template";
import { useState, Component } from "react";
import { Button } from "@material-ui/core";

export default function Home(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Template headingTitle="Next App" className="home" wrappedElement="main">
      <h1>Hello, World!</h1>

      <h1>Home Page</h1>

      <h1>{count}</h1>

      <Button variant="outlined" onClick={handleClick} color="primary">
        Click Me
      </Button>
      <p>Hover Me</p>
    </Template>
  );
}
