import styles from "./GlobalStyles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function GlobalStyles({ children }) {
    return <div className={cx("global_styles")}>{children}</div>;
}

export default GlobalStyles;
