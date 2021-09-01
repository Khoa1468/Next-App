import Component from "layouts/Component";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

interface DetailProps {
  href: string;
  className: string;
  text: string;
}

export interface AppBarLinkPropsBeta {
  handleClose: () => any;
  detail: Array<DetailProps>;
}

export default function LinkComponent(props: AppBarLinkPropsBeta) {
  return (
    <Component wrappedElement="fragment">
      {props.detail.map((value) => {
        return (
          <Link key={value.text} href={value.href} passHref>
            <a key={value.text} href={value.href} className={value.className}>
              <MenuItem onClick={props.handleClose}>{value.text}</MenuItem>
            </a>
          </Link>
        );
      })}
    </Component>
  );
}
