import Template from "layouts/Template";
import { useState, Component, useEffect, useCallback } from "react";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginRight: "2px",
    },
  })
);

const COUNT_LOCAL_STORAGE_KEY = "COUNT";

export default function Home(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const classes = useStyles();

  // function handleClick() {
  //   setCount(count + 1);
  // }

  useEffect(() => {
    const storage = localStorage.getItem(COUNT_LOCAL_STORAGE_KEY);
    if (storage) {
      const count = JSON.parse(storage);
      const countValidated = Number.parseInt(count);
      setCount(countValidated);
    } else {
      setCount(0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(COUNT_LOCAL_STORAGE_KEY, JSON.stringify(count));
  }, [count]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <Template headingTitle="Next App" className="home" wrappedElement="main">
      <h1>Hello, World!</h1>

      <h1>Home Page</h1>

      <h1>{count}</h1>

      <Button
        variant="outlined"
        onClick={increment}
        color="primary"
        // className={classes.button}
        style={{
          marginRight: "7px",
        }}
      >
        +
      </Button>
      <Button variant="outlined" onClick={decrement} color="primary">
        -
      </Button>
      <p>Hover Me</p>
    </Template>
  );
}
