// @flow

import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars";

type Props = {
  shouldScroll: boolean,
  children: React.Node
};

export default function Scrollable({ shouldScroll, children }: Props) {
  return shouldScroll ? (
    <Scrollbars autoHide>{children}</Scrollbars>
  ) : (
    <div>{children}</div>
  );
}
