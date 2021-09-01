import Component from "layouts/Component";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

interface AppBarLinkProps {
  handleClose: () => any;
}

export default function LinkComponentBackUp(props: AppBarLinkProps) {
  return (
    <Component wrappedElement="fragment">
      <Link href="/" passHref>
        <a href="/" className="a black">
          <MenuItem onClick={props.handleClose}>Home</MenuItem>
        </a>
      </Link>
      <Link href="/about" passHref>
        <a href="/about" className="a black">
          <MenuItem onClick={props.handleClose}>About</MenuItem>
        </a>
      </Link>
      <Link href="/todos" passHref>
        <a href="/todos" className="a black">
          <MenuItem onClick={props.handleClose}>Todos</MenuItem>
        </a>
      </Link>
      <Link href="/j4f" passHref>
        <a href="/j4f" className="a black">
          <MenuItem onClick={props.handleClose}>J4F</MenuItem>
        </a>
      </Link>
    </Component>
  );
}
