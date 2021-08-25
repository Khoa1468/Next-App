import React from "react";

type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
  wrappedElement?: "div" | "main" | "fragment";
};

export default function Component({
  children = null,
  className = "",
  wrappedElement = "main",
}: ComponentProps) {
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
  return <>{wrapped}</>;
}
