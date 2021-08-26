import Template from "layouts/Template";
import { useEffect, useCallback } from "react";

export default function Test() {
  return (
    <Template headingTitle="J4F" className="home">
      <h1>
        <h1>J4F</h1>
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Template>
  );
}
