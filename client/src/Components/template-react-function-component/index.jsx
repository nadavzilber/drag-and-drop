import React from "react";
import classNames from "classnames/bind";

import styles from "./index.scss";

const cx = classNames.bind(styles);

function TemplateReactFunctionComponent() {
  return <div className={cx("template-react-function-component")}>Hello :)</div>;
}

export default TemplateReactFunctionComponent;
