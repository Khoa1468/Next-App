import Template from "layouts/Template";
import { useEffect, useCallback } from "react";

export default function Test() {
  useEffect(() => {
    setTimeout(() => {
      location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }, 1000);
  }, []);
  return (
    <Template className="home">
      <h1>
        <h1>J4F</h1>
      </h1>
    </Template>
  );
}
