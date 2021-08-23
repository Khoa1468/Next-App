import Heading from "../components/Head";
import React from "react";

interface TemplateProps {
  headingTitle?: string;
  children?: React.ReactNode;
  className?: string;
  wrappedElement?: "div" | "main" | "fragment";
}

export default function Template({
  headingTitle = "",
  children = null,
  className = "",
  wrappedElement = "main",
}: TemplateProps) {
  let wrapped: React.ReactNode = null;

  if (wrappedElement == "div") {
    wrapped = <div className={className}>{children}</div>;
  } else if (wrappedElement == "main") {
    wrapped = <main className={className}>{children}</main>;
  } else if ((wrappedElement = "fragment")) {
    if (className) {
      wrapped = <>{children}</>;
      console.warn("The Fragment Element Has No Attribute className");
    } else {
      wrapped = <>{children}</>;
    }
  }
  return (
    <>
      <Heading title={headingTitle} />

      {wrapped}
    </>
  );
}
