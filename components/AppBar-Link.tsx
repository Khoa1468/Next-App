import Component from "layouts/Component";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

/**
 * This Interface Is A Child Interface Of ```AppBarLinkProps``` Interface
 */

export interface DetailProps {
  href: string;
  className: string;
  text: string;
}

/**
 * This Interface Is A Interface Of ```AppBarLinkProps``` Function Element
 */

export interface AppBarLinkProps {
  handleClose: () => any;
  detail: Array<DetailProps>;
}

/**
 *
 * @param props Is Props Of LinkComponent
 * @returns JSX.Element
 */

export default function LinkComponent(props: AppBarLinkProps) {
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
